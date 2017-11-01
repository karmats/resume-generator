import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { Project, Skill } from '../models';
import { ResumeService } from '../resume.service'
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  @Input() projects: Array<Project>;
  @Input() skills: Array<Skill>;
  months: Array<string>;

  constructor(private dialog: MatDialog, private viewContainerRef: ViewContainerRef, private resumeService: ResumeService) { }

  ngOnInit() {
    this.projects = this.projects || [];
    this.months = this.resumeService.months;
    this.sortProjects();
  }

  newProject() {
    const config = new MatDialogConfig();
    config.width = "75vw";

    const dialogRef = this.dialog.open(ProjectDialog, config);
    dialogRef.componentInstance.skills = this.skills.map(s => s ? s.name : '');

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.endDate = result.current ? null : result.endDate;
        this.projects = this.resumeService.addProject(result);
        this.sortProjects();
      }
    });
  }

  editProject(project: Project) {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.width = "75vw";

    const dialogRef = this.dialog.open(ProjectDialog, config);
    dialogRef.componentInstance.project = project;
    dialogRef.componentInstance.skills = this.skills.map(s => s.name);

    dialogRef.afterClosed().subscribe(result => {
      this.projects = result ? this.resumeService.updateProjects(this.projects) :
                  this.resumeService.retrieveResume().projects;
      this.sortProjects();
    });
  }

  deleteProject(project: Project) {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your project ${project.name}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projects = this.resumeService.removeProject(project);
      }
    })
  }

  // Sort by start date
  sortProjects() {
    this.projects.sort((a, b) => {
      return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year :
        b.startDate.month - a.startDate.month;
    });
  }

}

// Add new project dialog
@Component({
  template: `
    <h3 mat-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}project</h3>
    <div mat-dialog-content fxLayout="column">
      <mat-input-container>
        <input matInput
          [(ngModel)]="project.name"
          placeholder="Project name">
      </mat-input-container>
      <mat-input-container>
        <textarea matInput
          rows="4"
          [(ngModel)]="project.description"
          placeholder="Project description">
        </textarea>
      </mat-input-container>
      <mat-input-container>
        <input matInput
          [(ngModel)]="project.imageUrl"
          placeholder="Project logo url (Optional)">
      </mat-input-container>
      <mat-input-container>
        <input matInput
          [(ngModel)]="project.web"
          placeholder="Project website (Optional)">
      </mat-input-container>
      <mat-chip-list #chipList>
        <mat-chip *ngFor="let tag of project.tags" selectable="true"
                removable="true" (remove)="removeTag(tag)">
          {{tag}}
          <mat-icon matChipRemove>cancel</mat-icon>
        </mat-chip>
        <mat-input-container>
          <input matInput 
                 placeholder="Add tag..."
                 [formControl]="tagControl"
                 [matAutocomplete]="auto"
                 [matChipInputFor]="chipList"
                 [matChipInputAddOnBlur]="true"
                 (matChipInputTokenEnd)="addTag($event)" />
        </mat-input-container>
      </mat-chip-list>
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let skill of filteredSkills | async" [value]="skill">
            {{ skill }}
        </mat-option>
      </mat-autocomplete>
      <div class="date-container">
        <label class="select-label">From</label>
        <div fxLayout="row">
          <mat-select fxFlex="50" [(ngModel)]="project.startDate.year" placeholder="Year">
            <mat-option *ngFor="let year of years" [value]="year"> {{year}} </mat-option>
          </mat-select>
          <mat-select fxFlex="50" [(ngModel)]="project.startDate.month" placeholder="Month">
            <mat-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </mat-option>
          </mat-select>
        </div>
      </div>
      <mat-checkbox [(ngModel)]="project.current" (change)="currentChanged()">
        Current project
      </mat-checkbox>
      <div class="date-container" *ngIf="!project.current">
        <label class="select-label">To</label>
        <div fxLayout="row">
          <mat-select fxFlex="50" [(ngModel)]="project.endDate.year" placeholder="Year">
            <mat-option *ngFor="let year of years" [value]="year"> {{year}} </mat-option>
          </mat-select>
          <mat-select fxFlex="50" [(ngModel)]="project.endDate.month" placeholder="Month">
            <mat-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </mat-option>
          </mat-select>
        </div>
      </div>
    </div>
    <div mat-dialog-actions>
      <button mat-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button mat-button color="primary" (click)="dialogRef.close(project)">Save</button>
    </div>
  `,
})
export class ProjectDialog implements OnInit {
  public project: Project;
  public skills: Array<string>;
  public years: Array<number>;
  public months: Array<string>;
  public editMode: boolean;
  public filteredSkills: Observable<Array<string>>;
  public tagControl: FormControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<ProjectDialog>, private resumeService: ResumeService) {
    this.project = {
      name: '',
      description: '',
      imageUrl: '',
      web: '',
      current: true,
      tags: [],
      startDate: this.resumeService.todayAsYearMonth(),
      endDate: this.resumeService.todayAsYearMonth()
    }

    this.years = resumeService.years;
    this.months = resumeService.months;
  }

  ngOnInit() {
    // Assume edit mode if name isn't blank
    this.editMode = this.project && this.project.name.length > 0;
    this.project.tags = this.project.tags || [];
    // Skills for tag autocomplete
    this.filteredSkills = this.tagControl.valueChanges
    .startWith(null)
    .map(val => val ? this.filter(val) : this.skills.slice());
  }

  filter(val: string): string[] {
    return this.skills.filter(s =>
      s.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }


  addTag(event: any): void {
    const input = event.input;
    const value = (event.value || '').trim();

    if (value) {
      this.project.tags.push(value);
    }

    // Reset input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: any): void {
    const tags = this.project.tags.filter(t => t !== tag);
    this.project.tags = tags;
  }

  currentChanged() {
    if (!this.project.current && !this.project.endDate) {
      this.project.endDate = this.resumeService.todayAsYearMonth();
    }
  }

}
