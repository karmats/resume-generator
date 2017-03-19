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
    const config = new MdDialogConfig();
    config.width = "50%";

    const dialogRef = this.dialog.open(PositionDialog, config);


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
    config.width = "50%";

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
    <div md-dialog-content fxLayout="column">
      <md-input-container>
        <input mdInput
          [(ngModel)]="position.company"
          placeholder="Company">
      </md-input-container>
      <md-input-container>
        <input mdInput
          [(ngModel)]="position.companyLogoUrl"
          placeholder="Company Logo URL (Optional)">
      </md-input-container>
      <md-input-container>
        <input mdInput
          [(ngModel)]="position.title"
          placeholder="Title">
      </md-input-container>
      <md-input-container>
        <textarea mdInput
        [(ngModel)]="position.summary"
        rows="4" placeholder="Summary"></textarea>
      </md-input-container>
      <div class="date-container">
        <label>From</label>
        <div fxLayout="row">
          <md-select fxFlex="50" [(ngModel)]="position.startDate.year" placeholder="Year">
            <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
          </md-select>
          <md-select fxFlex="50" [(ngModel)]="position.startDate.month" placeholder="Month">
            <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
          </md-select>
        </div>
      </div>
      <md-checkbox [(ngModel)]="position.current" (change)="currentChanged()">
        Current job
      </md-checkbox>
      <div class="date-container" *ngIf="!position.current">
        <label>To</label>
        <div fxLayout="row">
          <md-select fxFlex="50" [(ngModel)]="position.endDate.year" placeholder="Year">
            <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
          </md-select>
          <md-select fxFlex="50" [(ngModel)]="position.endDate.month" placeholder="Month">
            <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
          </md-select>
        </div>
      </div>
    </div>
    <div md-dialog-actions>
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
    this.position = {
      company: '',
      companyLogoUrl: '',
      current: true,
      startDate: this.resumeService.todayAsYearMonth(),
      endDate: this.resumeService.todayAsYearMonth(),
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

  currentChanged() {
    if (!this.position.current && !this.position.endDate) {
      this.position.endDate = this.resumeService.todayAsYearMonth();
    }
  }

}
