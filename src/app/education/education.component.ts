import { Component, Input, ViewContainerRef, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { Education } from '../models';
import { ResumeService } from '../resume.service'
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {
  @Input() educations: Array<Education>;
  months: Array<string>

  constructor(private dialog: MdDialog, private viewContainerRef: ViewContainerRef, private resumeService: ResumeService) { }

  ngOnInit() {
    this.months = this.resumeService.months;
    this.educations = this.educations || [];
    this.sortEducations();
  }

  newEducation() {
    const config = new MdDialogConfig();
    config.width = "75vw";

    const dialogRef = this.dialog.open(EducationDialog, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.endDate = result.current ? null : result.endDate;
        this.educations = this.resumeService.addEducation(result);
        this.sortEducations();
      }
    });
  }

  editEducation(education: Education) {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.width = "75vw";

    const dialogRef = this.dialog.open(EducationDialog, config);
    dialogRef.componentInstance.education = education;

    dialogRef.afterClosed().subscribe(result => {
      this.educations = result ? this.resumeService.updateEducations(this.educations) :
                  this.resumeService.retrieveResume().educations;
      this.sortEducations();
    });
  }

  deleteEducation(education: Education) {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your work education at ${education.school}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.educations = this.resumeService.removeEducation(education);
      }
    })
  }

  // Sort by start date
  sortEducations() {
    this.educations.sort((a, b) => {
      return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year :
        b.startDate.month - a.startDate.month;
    });
  }

}

// Add new education dialog
@Component({
  template: `
    <h3 md-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}education</h3>
    <div md-dialog-content fxLayout="column">

      <md-input-container>
        <input mdInput
          [(ngModel)]="education.school"
          placeholder="School">
      </md-input-container>

      <md-input-container>
        <input mdInput
          [(ngModel)]="education.field"
          placeholder="Field of Study">
      </md-input-container>

      <md-input-container>
        <input mdInput
              [(ngModel)]="education.degree"
              placeholder="Degree"
              [formControl]="degreeCtrl"
              [mdAutocomplete]="auto">
      </md-input-container>
      <md-autocomplete #auto="mdAutocomplete">
        <md-option *ngFor="let degree of filteredDegrees | async" [value]="degree">
          {{ degree }}
        </md-option>
      </md-autocomplete>

      <div class="date-container">
        <label>From</label>
        <div fxLayout="row">
          <md-select fxFlex="50" [(ngModel)]="education.startDate.year" placeholder="Year">
            <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
          </md-select>
          <md-select fxFlex="50" [(ngModel)]="education.startDate.month" placeholder="Month">
            <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
          </md-select>
        </div>
      </div>
      <md-checkbox [(ngModel)]="education.current" (change)="currentChanged()">
        Current education
      </md-checkbox>
      <div class="date-container" *ngIf="!education.current">
        <label>To</label>
        <div fxLayout="row">
          <md-select fxFlex="50" [(ngModel)]="education.endDate.year" placeholder="Year">
            <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
          </md-select>
          <md-select fxFlex="50" [(ngModel)]="education.endDate.month" placeholder="Month">
            <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
          </md-select>
        </div>
      </div>
    </div>

    <div md-dialog-actions>
      <button md-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button md-button color="primary" (click)="dialogRef.close(education)">Save</button>
    </div>
  `,
})
export class EducationDialog implements OnInit {
  degreeCtrl:FormControl;
  degrees: Array<string>;
  filteredDegrees: Observable<Array<string>>;

  education: Education;
  years: Array<number>;
  months: Array<string>;
  editMode: boolean;

  constructor(public dialogRef: MdDialogRef<EducationDialog>, private resumeService: ResumeService) {
    this.degreeCtrl = new FormControl();
    this.filteredDegrees = this.degreeCtrl.valueChanges
        .startWith(null)
        .map(val => this.filterDegrees(val));

    this.education = {
      school: '',
      field: '',
      current: true,
      startDate: this.resumeService.todayAsYearMonth(),
      endDate: this.resumeService.todayAsYearMonth(),
      degree: ''
    }

    this.years = resumeService.years;
    this.months = resumeService.months;
    this.degrees = resumeService.degrees;
  }

  ngOnInit() {
    // Assume edit mode if school isn't blank
    this.editMode = this.education && this.education.school.length > 0;
  }

  filterDegrees(val: string) {
    return val ? this.degrees.filter((s) => new RegExp(val, 'gi').test(s)) : this.degrees;
  }

  currentChanged() {
    if (!this.education.current && !this.education.endDate) {
      this.education.endDate = this.resumeService.todayAsYearMonth();
    }
  }
}
