import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

import { Project } from '../models';
import { ResumeService } from '../resume.service'
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() projects: Array<Project>;
  months: Array<string>;

  constructor(private dialog: MdDialog, private viewContainerRef: ViewContainerRef, private resumeService: ResumeService) { }

  ngOnInit() {
    this.months = this.resumeService.months;
  }

  newProject() {
    const config = new MdDialogConfig();
    config.width = "50%";

    const dialogRef = this.dialog.open(ProjectDialog, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.endDate = result.current ? null : result.endDate;
        this.projects = this.resumeService.addProject(result);
      }
    });
  }

  editProject(project: Project) {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.width = "50%";

    const dialogRef = this.dialog.open(ProjectDialog, config);
    dialogRef.componentInstance.project = project;

    dialogRef.afterClosed().subscribe(result => {
      this.projects = result ? this.resumeService.updateProjects(this.projects) :
                  this.resumeService.retrieveResume().projects;
    });
  }

  deleteProject(project: Project) {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your project ${project.name}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projects = this.resumeService.removeProject(project);
      }
    })
  }

}

// Add new project dialog
@Component({
  template: `
    <h3 md-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}project</h3>
    <div md-dialog-content fxLayout="column">
      <md-input-container>
        <input mdInput
          [(ngModel)]="project.name"
          placeholder="Project name">
      </md-input-container>
      <md-input-container>
        <textarea mdInput
          rows="4"
          [(ngModel)]="project.description"
          placeholder="Project description">
        </textarea>
      </md-input-container>
      <md-input-container>
        <input mdInput
          [(ngModel)]="project.imageUrl"
          placeholder="Project logo url (Optional)">
      </md-input-container>
      <md-input-container>
        <input mdInput
          [(ngModel)]="project.web"
          placeholder="Project website (Optional)">
      </md-input-container>
      <div class="date-container">
        <label class="select-label">From</label>
        <div fxLayout="row">
          <md-select fxFlex="50" [(ngModel)]="project.startDate.year" placeholder="Year">
            <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
          </md-select>
          <md-select fxFlex="50" [(ngModel)]="project.startDate.month" placeholder="Month">
            <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
          </md-select>
        </div>
      </div>
      <md-checkbox [(ngModel)]="project.current" (change)="currentChanged()">
        Current project
      </md-checkbox>
      <div class="date-container" *ngIf="!project.current">
        <label class="select-label">To</label>
        <div fxLayout="row">
          <md-select fxFlex="50" [(ngModel)]="project.endDate.year" placeholder="Year">
            <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
          </md-select>
          <md-select fxFlex="50" [(ngModel)]="project.endDate.month" placeholder="Month">
            <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
          </md-select>
        </div>
      </div>
    </div>
    <div md-dialog-actions>
      <button md-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button md-button color="primary" (click)="dialogRef.close(project)">Save</button>
    </div>
  `,
})
export class ProjectDialog implements OnInit {
  public project: Project;
  public years: Array<number>;
  public months: Array<string>;
  public editMode: boolean;

  constructor(public dialogRef: MdDialogRef<ProjectDialog>, private resumeService: ResumeService) {
    this.project = {
      name: '',
      description: '',
      imageUrl: '',
      web: '',
      current: true,
      startDate: this.resumeService.todayAsYearMonth(),
      endDate: this.resumeService.todayAsYearMonth()
    }

    this.years = resumeService.years;
    this.months = resumeService.months;
  }

  ngOnInit() {
    // Assume edit mode if name isn't blank
    this.editMode = this.project && this.project.name.length > 0;
  }

  currentChanged() {
    if (!this.project.current && !this.project.endDate) {
      this.project.endDate = this.resumeService.todayAsYearMonth();
    }
  }

}
