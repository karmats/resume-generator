import { Component, Input, ViewContainerRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Education } from '../models';
import { ResumeService } from '../resume.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {
  @Input() educations: Education[];
  months: string[];

  constructor(
    private readonly dialog: MatDialog,
    private readonly viewContainerRef: ViewContainerRef,
    public resumeService: ResumeService
  ) {}

  ngOnInit(): void {
    this.months = this.resumeService.months;
    this.educations = this.educations || [];
    this.sortEducations();
  }

  newEducation(): void {
    const config = new MatDialogConfig();
    config.width = '75vw';

    const dialogRef = this.dialog.open(EducationDialog, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.endDate = result.current ? null : result.endDate;
        this.educations = this.resumeService.addEducation(result);
        this.sortEducations();
      }
    });
  }

  editEducation(education: Education): void {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.width = '75vw';

    const dialogRef = this.dialog.open(EducationDialog, config);
    dialogRef.componentInstance.education = education;

    dialogRef.afterClosed().subscribe(result => {
      this.educations = result ? this.resumeService.updateEducations(this.educations) : this.resumeService.retrieveResume().educations;
      this.sortEducations();
    });
  }

  deleteEducation(education: Education): void {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your work education at ${education.school}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.educations = this.resumeService.removeEducation(education);
      }
    });
  }

  // Sort by start date
  sortEducations(): void {
    this.educations.sort((a, b) => {
      return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year : b.startDate.month - a.startDate.month;
    });
  }
}

// Add new education dialog
@Component({
  template: `
    <h3 mat-dialog-title>{{ editMode ? 'Edit ' : 'Add new ' }}education</h3>
    <div mat-dialog-content fxLayout="column">
      <mat-form-field>
        <input matInput [(ngModel)]="education.school" placeholder="School" />
      </mat-form-field>

      <mat-form-field>
        <input matInput [(ngModel)]="education.field" placeholder="Field of Study" />
      </mat-form-field>

      <mat-form-field>
        <input matInput [(ngModel)]="education.degree" placeholder="Degree" [formControl]="degreeCtrl" [matAutocomplete]="auto" />
      </mat-form-field>
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let degree of filteredDegrees | async" [value]="degree">
          {{ degree }}
        </mat-option>
      </mat-autocomplete>

      <div class="date-container">
        <label>From</label>
        <div>
          <mat-select [(ngModel)]="education.startDate.year" placeholder="Year">
            <mat-option *ngFor="let year of years" [value]="year"> {{ year }} </mat-option>
          </mat-select>
          <mat-select [(ngModel)]="education.startDate.month" placeholder="Month">
            <mat-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{ month }} </mat-option>
          </mat-select>
        </div>
      </div>
      <mat-checkbox [(ngModel)]="education.current" (change)="currentChanged()"> Current education </mat-checkbox>
      <div class="date-container" *ngIf="!education.current">
        <label>To</label>
        <div>
          <mat-select [(ngModel)]="education.endDate.year" placeholder="Year">
            <mat-option *ngFor="let year of years" [value]="year"> {{ year }} </mat-option>
          </mat-select>
          <mat-select [(ngModel)]="education.endDate.month" placeholder="Month">
            <mat-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{ month }} </mat-option>
          </mat-select>
        </div>
      </div>
    </div>

    <div mat-dialog-actions>
      <button mat-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button mat-button color="primary" (click)="dialogRef.close(education)">Save</button>
    </div>
  `
})
export class EducationDialog implements OnInit {
  degreeCtrl: FormControl;
  degrees: string[];
  filteredDegrees: Observable<string[]>;

  education: Education;
  years: number[];
  months: string[];
  editMode: boolean;

  constructor(public dialogRef: MatDialogRef<EducationDialog>, private readonly resumeService: ResumeService) {
    this.degreeCtrl = new FormControl();
    this.filteredDegrees = this.degreeCtrl.valueChanges.pipe(
      startWith(null),
      map(val => this.filterDegrees(val))
    );

    this.education = {
      school: '',
      field: '',
      current: true,
      startDate: this.resumeService.todayAsYearMonth(),
      endDate: this.resumeService.todayAsYearMonth(),
      degree: ''
    };

    this.years = resumeService.years;
    this.months = resumeService.months;
    this.degrees = resumeService.degrees;
  }

  ngOnInit(): void {
    // Assume edit mode if school isn't blank
    this.editMode = this.education && this.education.school.length > 0;
  }

  filterDegrees(val: string): string[] {
    return val ? this.degrees.filter(s => new RegExp(val, 'gi').test(s)) : this.degrees;
  }

  currentChanged(): void {
    if (!this.education.current && !this.education.endDate) {
      this.education.endDate = this.resumeService.todayAsYearMonth();
    }
  }
}
