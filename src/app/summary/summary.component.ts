import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ResumeService } from '../resume.service';

interface Summary {
  name: string;
  profileUrl: string;
  description: string;
  title: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() name: string;
  @Input('picture') profileUrl: string;
  @Input() description: string;
  @Input() title: string;
  @Input() phone: string;
  @Input() email: string;

  constructor(private dialog: MdDialog, private viewContainerRef: ViewContainerRef, private resumeService: ResumeService) { }

  ngOnInit() {
  }

  editSummary() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(EditSummaryDialog, config);
    dialogRef.componentInstance.summary = {
      name: this.name,
      profileUrl: this.profileUrl,
      description: this.description,
      title: this.title,
      phone: this.phone,
      email: this.email
    }

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      const resume = this.resumeService.updateSummary(result.name, result.profileUrl,
          result.description, result.title, result.phone, result.email);
      this.name = resume.name;
      this.profileUrl = resume.pictureUrl;
      this.description = resume.summary;
      this.title = resume.title;
      this.phone = resume.phone;
      this.email = resume.email;
    });
  }
}

// Edit summary dialog
@Component({
  template: `
    <h3 md-dialog-title>Edit summary</h3>
    <div md-dialog-content>
      <div class="row">
        <md-input-container class="col-md-12">
          <input mdInput
            [(ngModel)]="summary.name"
            placeholder="Your name">
        </md-input-container>
        <md-input-container class="col-md-12">
          <input mdInput
            [(ngModel)]="summary.profileUrl"
            placeholder="Url to profile picture">
        </md-input-container>
        <md-input-container class="col-md-12">
          <input mdInput
            [(ngModel)]="summary.title"
            placeholder="Job title">
        </md-input-container>
        <md-input-container class="col-md-12">
          <textarea mdInput
          [(ngModel)]="summary.description"
          placeholder="Description of yourself"></textarea>
        </md-input-container>
        <md-input-container class="col-md-12">
          <input mdInput
            [(ngModel)]="summary.phone"
            placeholder="Your phone number">
        </md-input-container>
        <md-input-container class="col-md-12">
          <input mdInput
            [(ngModel)]="summary.email"
            placeholder="Your email adress">
        </md-input-container>
      </div>
    </div>
    <div class="dialog-footer">
      <button md-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button md-button color="primary" (click)="dialogRef.close(summary)">Ok</button>
    </div>
  `,
})
export class EditSummaryDialog {
  public summary: Summary;

  constructor(public dialogRef: MdDialogRef<EditSummaryDialog>) {
  }
}
