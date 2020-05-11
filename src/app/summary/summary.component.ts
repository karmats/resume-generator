import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';

import { ResumeService } from '../resume.service';
import { Skill, Social, SocialType } from '../models';

interface Summary {
  name: string;
  profileUrl: string;
  description: string;
  title: string;
  phone: string;
  email: string;
  socials: Array<Social>;
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
  @Input() socials: Array<Social>;
  @Input() skills: Array<Skill>;

  constructor(
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef,
    public resumeService: ResumeService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // Profile picture placeholder
    this.iconRegistry
      .addSvgIcon('account-circle', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/account_circle.svg'))
      .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/facebook-box.svg'))
      .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/twitter-box.svg'))
      .addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/linkedin-box.svg'))
      .addSvgIcon('instagram', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/instagram.svg'))
      .addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/github-circle.svg'));
  }

  editSummary() {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.width = '75vw';

    const dialogRef = this.dialog.open(EditSummaryDialog, config);
    dialogRef.componentInstance.summary = {
      name: this.name,
      profileUrl: this.profileUrl,
      description: this.description,
      title: this.title,
      phone: this.phone,
      email: this.email,
      socials: this.socials
    };

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      const resume = this.resumeService.updateSummary(
        result.name,
        result.profileUrl,
        result.description,
        result.title,
        result.phone,
        result.email,
        result.socials
      );
      this.name = resume.name;
      this.profileUrl = resume.pictureUrl;
      this.description = resume.summary;
      this.title = resume.title;
      this.phone = resume.phone;
      this.email = resume.email;
      this.socials = resume.social;
    });
  }

  uploadResume(event) {
    const resumeFile: File = event.target.files[0];
    const reader = new FileReader();

    // Callback when the file has been read
    reader.onload = () => {
      if (reader && reader.result && reader) {
        const jsonResume = JSON.parse(reader.result as string);
        this.resumeService.parseAndSaveJsonResume(jsonResume);
      }
    };

    if (resumeFile) {
      reader.readAsText(resumeFile, 'UTF-8');
    }
  }

  exportToJsonResume() {
    const json = this.resumeService.currentResumeToJsonResume();
    const uriContent = 'data:application/octet-stream,' + encodeURIComponent(JSON.stringify(json));
    window.open(uriContent, 'export');
  }
}

// Edit summary dialog
@Component({
  template: `
    <h3 mat-dialog-title>Edit summary</h3>
    <div mat-dialog-content fxLayout="column">
      <mat-form-field>
        <input matInput [(ngModel)]="summary.name" placeholder="Your name" />
      </mat-form-field>
      <mat-form-field>
        <input matInput [(ngModel)]="summary.profileUrl" placeholder="Url to profile picture" />
      </mat-form-field>
      <mat-form-field>
        <input matInput [(ngModel)]="summary.title" placeholder="Job title" />
      </mat-form-field>
      <mat-form-field>
        <textarea matInput [(ngModel)]="summary.description" rows="4" placeholder="Description of yourself"></textarea>
      </mat-form-field>
      <mat-form-field>
        <input matInput [(ngModel)]="summary.phone" placeholder="Your phone number" />
      </mat-form-field>
      <mat-form-field>
        <input matInput [(ngModel)]="summary.email" placeholder="Your email adress" />
      </mat-form-field>
      <mat-form-field class="capitalize" *ngFor="let social of summary.socials">
        <input matInput [(ngModel)]="social.url" placeholder="{{ social.type.toLowerCase() }}" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button color="primary" (click)="dialogRef.close()">
        Cancel
      </button>
      <button mat-button color="primary" (click)="dialogRef.close(summary)">
        Ok
      </button>
    </div>
  `
})
export class EditSummaryDialog implements OnInit {
  public summary: Summary;

  constructor(public dialogRef: MatDialogRef<EditSummaryDialog>) {}

  ngOnInit() {
    this.summary.socials = this.summary.socials || [];
    for (let type in SocialType) {
      const sType: SocialType = <SocialType>SocialType[type];
      if (sType !== SocialType.UNKNOWN && !this.summary.socials.filter(s => s.type === sType).length) {
        this.summary.socials.push({ type: sType, url: '' });
      }
    }
  }
}
