import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MatDialogConfig, MatIconRegistry } from '@angular/material';

import { ResumeService } from '../resume.service';
import { Skill } from '../models';

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
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {
  @Input() name: string;
  @Input('picture') profileUrl: string;
  @Input() description: string;
  @Input() title: string;
  @Input() phone: string;
  @Input() email: string;
  @Input() skills: Array<Skill>;
  

  constructor(private dialog: MatDialog, private viewContainerRef: ViewContainerRef, private resumeService: ResumeService,
            private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // Profile picture placeholder
    this.iconRegistry
    .addSvgIcon(
        'account-circle',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/account_circle.svg'))
      .addSvgIcon(
        'facebook-box',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/facebook-box.svg'))
      .addSvgIcon(
        'twitter-box',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/twitter-box.svg'))
      .addSvgIcon(
        'linkedin-box',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/linkedin-box.svg'));
  }

  editSummary() {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.width = "75vw";

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

  uploadResume(event) {
    const resumeFile: File = event.target.files[0];
    const reader = new FileReader();

    // Callback when the file has been read
    reader.onload = () => {
      if (reader && reader.result && reader) {
        const jsonResume = JSON.parse(reader.result);
        this.resumeService.parseAndSaveJsonResume(jsonResume);
      }
    }

    if (resumeFile) {
      reader.readAsText(resumeFile, 'UTF-8');
    }
  }
}

// Edit summary dialog
@Component({
  template: `
    <h3 mat-dialog-title>Edit summary</h3>
    <div mat-dialog-content fxLayout="column">
      <mat-input-container>
        <input matInput
          [(ngModel)]="summary.name"
          placeholder="Your name">
      </mat-input-container>
      <mat-input-container>
        <input matInput
          [(ngModel)]="summary.profileUrl"
          placeholder="Url to profile picture">
      </mat-input-container>
      <mat-input-container>
        <input matInput
          [(ngModel)]="summary.title"
          placeholder="Job title">
      </mat-input-container>
      <mat-input-container>
        <textarea matInput
        [(ngModel)]="summary.description"
        rows="4" placeholder="Description of yourself"></textarea>
      </mat-input-container>
      <mat-input-container>
        <input matInput
          [(ngModel)]="summary.phone"
          placeholder="Your phone number">
      </mat-input-container>
      <mat-input-container>
        <input matInput
          [(ngModel)]="summary.email"
          placeholder="Your email adress">
      </mat-input-container>
    </div>
    <div mat-dialog-actions>
      <button mat-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button mat-button color="primary" (click)="dialogRef.close(summary)">Ok</button>
    </div>
  `,
})
export class EditSummaryDialog {
  public summary: Summary;

  constructor(public dialogRef: MatDialogRef<EditSummaryDialog>) {
  }
}
