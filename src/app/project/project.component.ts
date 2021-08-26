import { Component, Input, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Project, Skill, Tag } from '../models';
import { ResumeService } from '../resume.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  @Input() projects: Project[];
  @Input() skills: Skill[];
  months: string[];

  constructor(
    private readonly dialog: MatDialog,
    private readonly viewContainerRef: ViewContainerRef,
    public resumeService: ResumeService
  ) {}

  ngOnInit(): void {
    this.projects = this.projects || [];
    this.months = this.resumeService.months;
    this.sortProjects();
  }

  newProject(): void {
    const config = new MatDialogConfig();
    config.width = '75vw';

    const dialogRef = this.dialog.open(ProjectDialog, config);
    dialogRef.componentInstance.skills = (this.skills || []).map(s => (s ? s.name : ''));

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const project = result.project;
        project.endDate = project.current ? null : project.endDate;
        project.tags = result.tags;
        this.projects = this.resumeService.addProject(project);
        this.sortProjects();
      }
    });
  }

  editProject(project: Project): void {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.width = '75vw';

    const dialogRef = this.dialog.open(ProjectDialog, config);
    dialogRef.componentInstance.project = project;
    dialogRef.componentInstance.skills = this.skills.map(s => s.name);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        project.endDate = project.current ? null : project.endDate;
        project.tags = result.tags;
        this.projects = result ? this.resumeService.updateProjects(this.projects) : this.resumeService.retrieveResume().projects;
        this.sortProjects();
      }
    });
  }

  deleteProject(project: Project): void {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your project ${project.name}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projects = this.resumeService.removeProject(project);
      }
    });
  }

  // Sort by start date
  sortProjects(): void {
    this.projects.sort((a, b) => {
      return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year : b.startDate.month - a.startDate.month;
    });
  }
}

// Add new project dialog
@Component({
  template: `
    <h3 mat-dialog-title>{{ editMode ? 'Edit ' : 'Add new ' }}project</h3>
    <div mat-dialog-content fxLayout="column">
      <mat-form-field>
        <input matInput [(ngModel)]="project.name" placeholder="Project name" />
      </mat-form-field>
      <mat-form-field>
        <textarea matInput rows="4" [(ngModel)]="project.description" placeholder="Project description"> </textarea>
      </mat-form-field>
      <mat-form-field>
        <input matInput [(ngModel)]="project.imageUrl" placeholder="Project logo url (Optional)" />
      </mat-form-field>
      <mat-form-field>
        <input matInput [(ngModel)]="project.web" placeholder="Project website (Optional)" />
      </mat-form-field>

      <mat-form-field>
        <mat-chip-list #tagList>
          <mat-chip *ngFor="let tag of tags" removable="true" (remove)="removeTag(tag)">
            <mat-checkbox [checked]="tag.highlighted" (click)="toggleTagHighlight(tag)">{{ tag.name }}</mat-checkbox>
            <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>
          <input
            matInput
            placeholder="Add tag..."
            [formControl]="tagControl"
            [matAutocomplete]="auto"
            [matChipInputFor]="tagList"
            [matChipInputAddOnBlur]="false"
            (optionSelected)="addTag($event)"
            (matChipInputTokenEnd)="addTag($event)"
          />
        </mat-chip-list>
        <mat-autocomplete #auto="matAutocomplete" (optionSelected)="addTag($event)">
          <mat-option *ngFor="let skill of filteredSkills | async" [value]="skill">
            {{ skill }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>

      <div class="date-container">
        <label class="select-label">From</label>
        <div>
          <mat-select [(ngModel)]="project.startDate.year" placeholder="Year">
            <mat-option *ngFor="let year of years" [value]="year">
              {{ year }}
            </mat-option>
          </mat-select>
          <mat-select [(ngModel)]="project.startDate.month" placeholder="Month">
            <mat-option *ngFor="let month of months" [value]="months.indexOf(month)">
              {{ month }}
            </mat-option>
          </mat-select>
        </div>
      </div>
      <mat-checkbox [(ngModel)]="project.current" (change)="currentChanged()"> Current project </mat-checkbox>
      <div class="date-container" *ngIf="!project.current">
        <label class="select-label">To</label>
        <div fxLayout="row">
          <mat-select [(ngModel)]="project.endDate.year" placeholder="Year">
            <mat-option *ngFor="let year of years" [value]="year">
              {{ year }}
            </mat-option>
          </mat-select>
          <mat-select [(ngModel)]="project.endDate.month" placeholder="Month">
            <mat-option *ngFor="let month of months" [value]="months.indexOf(month)">
              {{ month }}
            </mat-option>
          </mat-select>
        </div>
      </div>
    </div>
    <div mat-dialog-actions>
      <button mat-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button mat-button color="primary" (click)="dialogRef.close({ project: project, tags: tags })">Save</button>
    </div>
  `
})
export class ProjectDialog implements OnInit {
  @ViewChild(MatAutocompleteTrigger, { static: false })
  autoTrigger: MatAutocompleteTrigger;

  project: Project;
  tags: Tag[];
  skills: string[];
  years: number[];
  months: string[];
  editMode: boolean;
  filteredSkills: Observable<string[]>;
  tagControl: FormControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<ProjectDialog>, private readonly resumeService: ResumeService) {
    this.project = {
      name: '',
      description: '',
      imageUrl: '',
      web: '',
      current: true,
      tags: [],
      startDate: this.resumeService.todayAsYearMonth(),
      endDate: this.resumeService.todayAsYearMonth()
    };

    this.years = resumeService.years;
    this.months = resumeService.months;
  }

  ngOnInit(): void {
    // Assume edit mode if name isn't blank
    this.editMode = this.project && this.project.name.length > 0;
    this.tags = this.project.tags ? this.project.tags.map(t => Object.assign({}, t)) : [];

    // Skills for tag autocomplete
    this.filteredSkills = this.tagControl.valueChanges.pipe(
      startWith(null),
      map(val => this.filter(val))
    );
  }

  filter(val: string): string[] {
    return this.skills
      .filter(s => this.tags.filter(t => t.name === s).length === 0)
      .filter(s => (val ? s.toLowerCase().startsWith(val.toLowerCase()) : true));
  }

  addTag(event: { input: { value: string }; value: string; option: { value: string } }): void {
    const input = event.input;
    const value = (event.option ? event.option.value : event.value || '').trim();

    if (value) {
      this.tags.push({ name: value, highlighted: false });
    }

    // Reset input value
    this.autoTrigger.closePanel();
    this.tagControl.setValue('');
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: Tag): void {
    this.tags = this.tags.filter(t => t !== tag);
  }

  toggleTagHighlight(tag: Tag): void {
    tag.highlighted = !tag.highlighted;
  }

  currentChanged(): void {
    if (!this.project.current && !this.project.endDate) {
      this.project.endDate = this.resumeService.todayAsYearMonth();
    }
  }
}
