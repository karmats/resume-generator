import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { Position } from '../models'
import { ResumeService } from '../resume.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() positions: Array<Position>;
  months: Array<string>;

  constructor(private dialog: MdDialog, private viewContainerRef: ViewContainerRef, private resumeService: ResumeService) { }

  ngOnInit() {
    this.months = this.resumeService.months;
  }

  newPosition() {
    const dialogRef = this.dialog.open(PositionDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.endDate = result.current ? null : result.endDate;
        this.positions = this.resumeService.addPosition(result);
      }
    });
  }

  editPosition(position: Position) {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(PositionDialog, config);
    dialogRef.componentInstance.position = position;

    dialogRef.afterClosed().subscribe(result => {
      this.positions = result ? this.resumeService.updatePositions(this.positions) : 
            this.resumeService.retrieveResume().positions;
    });
  }

  deletePosition(position: Position) {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your work experience at ${position.company}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.positions = this.resumeService.removePosition(position);
      }
    })
  }

}

// Add new position dialog
@Component({
  template: `
    <h3 md-dialog-title>{{ editMode ? 'Edit ' : 'Add new '}}position</h3>
    <div md-dialog-content>
      <div class="row">
        <md-input-container class="col-md-12">
          <input mdInput
            [(ngModel)]="position.company"
            placeholder="Company">
        </md-input-container>
        <md-input-container class="col-md-12">
          <input mdInput
            [(ngModel)]="position.companyLogoUrl"
            placeholder="Company Logo URL (Optional)">
        </md-input-container>
        <md-input-container class="col-md-12">
          <input mdInput
            [(ngModel)]="position.title"
            placeholder="Title">
        </md-input-container>
        <md-input-container class="col-md-12">
          <textarea mdInput
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
    </div>
    <div class="dialog-footer">
      <button md-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button md-button color="primary" (click)="dialogRef.close(position)">Save</button>
    </div>
  `,
})
export class PositionDialog implements OnInit {
  public position: Position;
  public years: Array<number>;
  public months: Array<string>;
  public editMode: boolean;

  constructor(public dialogRef: MdDialogRef<PositionDialog>, private resumeService: ResumeService) {
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

  ngOnInit() {
    // Assume edit mode if company isn't blank
    this.editMode = this.position && this.position.company.length > 0;
  }
}
