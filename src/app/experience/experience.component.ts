import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { Position } from '../models';
import { ResumeService } from '../resume.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  @Input() positions: Array<Position>;
  months: Array<string>;

  constructor(private dialog: MatDialog, private viewContainerRef: ViewContainerRef, public resumeService: ResumeService) {}

  ngOnInit() {
    this.months = this.resumeService.months;
    this.positions = this.positions || [];
    this.sortPositions();
  }

  newPosition() {
    const config = new MatDialogConfig();
    config.width = '75vw';

    const dialogRef = this.dialog.open(PositionDialog, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.endDate = result.current ? null : result.endDate;
        this.positions = this.resumeService.addPosition(result);
        this.sortPositions();
      }
    });
  }

  editPosition(position: Position) {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.width = '75vw';

    const dialogRef = this.dialog.open(PositionDialog, config);
    dialogRef.componentInstance.position = position;

    dialogRef.afterClosed().subscribe(result => {
      this.positions = result ? this.resumeService.updatePositions(this.positions) : this.resumeService.retrieveResume().positions;
      this.sortPositions();
    });
  }

  deletePosition(position: Position) {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your work experience at ${position.company}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.positions = this.resumeService.removePosition(position);
      }
    });
  }

  // Sort by start date
  sortPositions() {
    this.positions.sort((a, b) => {
      return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year : b.startDate.month - a.startDate.month;
    });
  }
}

// Add new position dialog
@Component({
  template: `
    <h3 mat-dialog-title>{{ editMode ? 'Edit ' : 'Add new ' }}position</h3>
    <div mat-dialog-content fxLayout="column">
      <mat-form-field>
        <input matInput [(ngModel)]="position.company" placeholder="Company" />
      </mat-form-field>
      <mat-form-field>
        <input matInput [(ngModel)]="position.title" placeholder="Title" />
      </mat-form-field>
      <mat-form-field>
        <textarea matInput [(ngModel)]="position.summary" rows="4" placeholder="Summary"></textarea>
      </mat-form-field>
      <div class="date-container">
        <label>From</label>
        <div>
          <mat-select [(ngModel)]="position.startDate.year" placeholder="Year">
            <mat-option *ngFor="let year of years" [value]="year"> {{ year }} </mat-option>
          </mat-select>
          <mat-select [(ngModel)]="position.startDate.month" placeholder="Month">
            <mat-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{ month }} </mat-option>
          </mat-select>
        </div>
      </div>
      <mat-checkbox [(ngModel)]="position.current" (change)="currentChanged()">
        Current job
      </mat-checkbox>
      <div class="date-container" *ngIf="!position.current">
        <label>To</label>
        <div>
          <mat-select [(ngModel)]="position.endDate.year" placeholder="Year">
            <mat-option *ngFor="let year of years" [value]="year"> {{ year }} </mat-option>
          </mat-select>
          <mat-select [(ngModel)]="position.endDate.month" placeholder="Month">
            <mat-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{ month }} </mat-option>
          </mat-select>
        </div>
      </div>
    </div>
    <div mat-dialog-actions>
      <button mat-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button mat-button color="primary" (click)="dialogRef.close(position)">Save</button>
    </div>
  `
})
export class PositionDialog implements OnInit {
  public position: Position;
  public years: Array<number>;
  public months: Array<string>;
  public editMode: boolean;

  constructor(public dialogRef: MatDialogRef<PositionDialog>, private resumeService: ResumeService) {
    this.position = {
      company: '',
      current: true,
      startDate: resumeService.todayAsYearMonth(),
      endDate: resumeService.todayAsYearMonth(),
      summary: '',
      title: ''
    };

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
