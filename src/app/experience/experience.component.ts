import { Component, Input, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Position } from '../models'
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() positions: Array<Position>;
  months: Array<string>;

  constructor(private dialog: MdDialog, private resumeService: ResumeService) { }

  ngOnInit() {
    this.months = this.resumeService.months;
  }

  newPosition() {
    const dialogRef = this.dialog.open(NewPositionDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      if (result.current) {
        result.endDate = null;
      }
      this.positions = this.resumeService.addPosition(result);
    });
  }
}

// Add new position dialog
@Component({
  template: `
    <h3 class="dialog-header">Add new position</h3>
    <div class="dialog-content row">
      <md-input-container class="col-md-12">
        <input md-input
          [(ngModel)]="position.company"
          placeholder="Company">
      </md-input-container>
      <md-input-container class="col-md-12">
        <input md-input
          [(ngModel)]="position.companyLogoUrl"
          placeholder="Company Logo URL (Optional)">
      </md-input-container>
      <md-input-container class="col-md-12">
        <input md-input
          [(ngModel)]="position.title"
          placeholder="Title">
      </md-input-container>
      <md-input-container class="col-md-12">
        <textarea md-input
        [(ngModel)]="position.summary"
        placeholder="Summary"></textarea>
      </md-input-container>
      <label class="col-md-6 select-label">From</label>
      <label class="col-md-6 select-label">To</label>
      <md-select [(ngModel)]="position.startDate.year" placeholder="Year" class="col-md-3">
        <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
      </md-select>
      <md-select [(ngModel)]="position.startDate.month" placeholder="Month" class="col-md-3">
        <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
      </md-select>
      <md-select *ngIf="!position.current" [(ngModel)]="position.endDate.year" placeholder="Year" class="col-md-3">
        <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
      </md-select>
      <md-select *ngIf="!position.current" [(ngModel)]="position.endDate.month" placeholder="Month" class="col-md-3">
        <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
      </md-select>
      <md-checkbox class="col-md-12" [(ngModel)]="position.current">
        Current job
      </md-checkbox>
    </div>
    <div class="dialog-footer">
      <button md-button color="primary" (click)="dialogRef.close()">CANCEL</button>
      <button md-button color="primary" (click)="dialogRef.close(position)">ADD</button>
    </div>
  `,
})
export class NewPositionDialog {
  public position: Position;
  public years: Array<number>;
  public months: Array<string>;

  constructor(public dialogRef: MdDialogRef<NewPositionDialog>, private resumeService: ResumeService) {
    const today = new Date();
    this.position = {
      company: '',
      companyLogoUrl: '',
      current: true,
      startDate: {
        year: today.getFullYear(),
        month: today.getMonth()
      },
      endDate: {
        year: today.getFullYear(),
        month: today.getMonth()
      },
      summary: '',
      title: ''
    }

    this.years = resumeService.years;
    this.months = resumeService.months;
  }
}
