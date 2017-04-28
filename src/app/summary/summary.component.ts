import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig, MdIconRegistry } from '@angular/material';

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
  

  constructor(private dialog: MdDialog, private viewContainerRef: ViewContainerRef, private resumeService: ResumeService,
            private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // Profile picture placeholder
    this.iconRegistry.addSvgIcon(
        'account-circle',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/account_circle.svg'));
  }

  editSummary() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.width = "50%";

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
    <h3 md-dialog-title>Edit summary</h3>
    <div md-dialog-content fxLayout="column">
      <md-input-container>
        <input mdInput
          [(ngModel)]="summary.name"
          placeholder="Your name">
      </md-input-container>
      <md-input-container>
        <input mdInput
          [(ngModel)]="summary.profileUrl"
          placeholder="Url to profile picture">
      </md-input-container>
      <md-input-container>
        <input mdInput
          [(ngModel)]="summary.title"
          placeholder="Job title">
      </md-input-container>
      <md-input-container>
        <textarea mdInput
        [(ngModel)]="summary.description"
        rows="4" placeholder="Description of yourself"></textarea>
      </md-input-container>
      <md-input-container>
        <input mdInput
          [(ngModel)]="summary.phone"
          placeholder="Your phone number">
      </md-input-container>
      <md-input-container>
        <input mdInput
          [(ngModel)]="summary.email"
          placeholder="Your email adress">
      </md-input-container>
    </div>
    <div md-dialog-actions>
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
