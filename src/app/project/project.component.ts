import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';

import { Project } from '../models';
import { ResumeService } from '../resume.service'
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() projects: Array<Project>;
  months: Array<string>;

  constructor(private dialog: MdDialog, private viewContainerRef: ViewContainerRef, private resumeService: ResumeService) { }

  ngOnInit() {
    this.months = this.resumeService.months;
  }

  deleteProject(project: Project) {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your project ${project.name}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projects = this.resumeService.removeProject(project);
      }
    })
  }

}
