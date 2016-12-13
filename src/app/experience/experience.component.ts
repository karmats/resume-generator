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

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  newPosition() {
    const dialogRef = this.dialog.open(NewPositionDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}

// Add new position dialog
@Component({
  template: `
    <h3 class="dialog-header">Add new position</h3>
    <div class="dialog-content">
      <md-select [(ngModel)]="date.year" placeholder="Year">
        <md-option *ngFor="let year of years" [value]="year"> {{year}} </md-option>
      </md-select>
      <md-select [(ngModel)]="date.month" placeholder="Month">
        <md-option *ngFor="let month of months" [value]="months.indexOf(month)"> {{month}} </md-option>
      </md-select>
    </div>
    <div class="dialog-footer">
      <button md-button color="primary" (click)="dialogRef.close(date)">CLOSE</button>
    </div>
  `,
})
export class NewPositionDialog {
  public date: {year: number, month: number};
  public years: Array<number>;
  public months: Array<string>;

  constructor(public dialogRef: MdDialogRef<NewPositionDialog>, private resumeService: ResumeService) {
    const today = new Date();
    this.date = {
      year: today.getFullYear(),
      month: today.getMonth()
    }
    this.years = resumeService.years;
    this.months = resumeService.months;
  }
}
