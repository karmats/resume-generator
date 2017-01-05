import { Component, Input, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Education } from '../models';
import { ResumeService } from '../resume.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() educations: Array<Education>;
  months: Array<string>

  constructor(private dialog: MdDialog, private resumeService: ResumeService) { }

  ngOnInit() {
    this.months = this.resumeService.months;
  }

  newEducation() {
    const dialogRef = this.dialog.open(NewEducationDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      if (result.current) {
        result.endDate = null;
      }
      this.educations = this.resumeService.addEducation(result);
    });
  }
}

// Add new education dialog
@Component({
  template: `
    <h3 class="dialog-header">Add new education</h3>
    <div class="dialog-content row">
      <md-input-container class="col-md-12">
        <input md-input
          [(ngModel)]="education.school"
          placeholder="School">
      </md-input-container>
      <md-input-container class="col-md-12">
        <input md-input
          [(ngModel)]="education.field"
          placeholder="Field of Study">
      </md-input-container>
      <md-select [(ngModel)]="education.degree" placeholder="Degree" class="col-md-12">
        <md-option *ngFor="let degree of degrees" [value]="degree"> {{degree}} </md-option>
      </md-select>
      <label class="col-md-6 select-label">From</label>
      <label class="col-md-6 select-label">To</label>
      <md-select [(ngModel)]="education.startDate.year" placeholder="Year" class="col-md-3">
        <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
      </md-select>
      <md-select [(ngModel)]="education.startDate.month" placeholder="Month" class="col-md-3">
        <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
      </md-select>
      <md-select *ngIf="!education.current" [(ngModel)]="education.endDate.year" placeholder="Year" class="col-md-3">
        <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
      </md-select>
      <md-select *ngIf="!education.current" [(ngModel)]="education.endDate.month" placeholder="Month" class="col-md-3">
        <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
      </md-select>
      <md-checkbox class="col-md-12" [(ngModel)]="education.current">
        Current education
      </md-checkbox>
    </div>
    <div class="dialog-footer">
      <button md-button color="primary" (click)="dialogRef.close()">CANCEL</button>
      <button md-button color="primary" (click)="dialogRef.close(education)">ADD</button>
    </div>
  `,
})
export class NewEducationDialog {
  public education: Education;
  public years: Array<number>;
  public months: Array<string>;
  public degrees: Array<string>;

  constructor(public dialogRef: MdDialogRef<NewEducationDialog>, private resumeService: ResumeService) {
    const today = new Date();
    this.education = {
      school: '',
      field: '',
      current: true,
      startDate: {
        year: today.getFullYear(),
        month: today.getMonth()
      },
      endDate: {
        year: today.getFullYear(),
        month: today.getMonth()
      },
      degree: 'Other'
    }

    this.years = resumeService.years;
    this.months = resumeService.months;
    this.degrees = resumeService.degrees;
  }
}
