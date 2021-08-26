import { Component, Input, ViewContainerRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { ResumeService } from '../resume.service';
import { Skill } from '../models';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html'
})
export class SkillComponent implements OnInit {
  @Input() skills: Skill[];

  constructor(
    private readonly dialog: MatDialog,
    public resumeService: ResumeService,
    private readonly viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.skills = this.skills || [];
    this.sortSkills();
  }

  newSkill(): void {
    const config = new MatDialogConfig();
    config.width = '75vw';
    const dialogRef = this.dialog.open(SkillDialog, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.skills = this.resumeService.addSkill(result);
        this.sortSkills();
      }
    });
  }

  editSkill(skill: Skill): void {
    const config = new MatDialogConfig();
    config.width = '75vw';
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(SkillDialog, config);
    dialogRef.componentInstance.skill = skill;

    dialogRef.afterClosed().subscribe(result => {
      this.skills = result ? this.resumeService.updateSkills(this.skills) : this.resumeService.retrieveResume().skills;
      this.sortSkills();
    });
  }

  deleteSkill(skill: Skill): void {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your skill in ${skill.name}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.skills = this.resumeService.removeSkill(skill);
      }
    });
  }

  // Sort by competence first, name second
  private sortSkills(): void {
    this.skills.sort((a, b) => {
      if (a.competence !== b.competence) {
        return b.competence - a.competence;
      }
      return a.name > b.name ? 1 : -1;
    });
  }
}

// Add new skill dialog
@Component({
  template: `
    <h3 mat-dialog-title>{{ editMode ? 'Edit ' : 'Add new ' }}skill</h3>
    <div mat-dialog-content fxLayout="column">
      <mat-form-field>
        <input matInput [(ngModel)]="skill.name" placeholder="Skill name" />
      </mat-form-field>
      <mat-slider [(ngModel)]="skill.competence" min="0" max="100" thumbLabel step="10" tickInterval="1"></mat-slider>
    </div>
    <div mat-dialog-actions>
      <button mat-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button mat-button color="primary" (click)="dialogRef.close(skill)">Save</button>
    </div>
  `
})
export class SkillDialog implements OnInit {
  skill: Skill;
  editMode: boolean;

  constructor(public dialogRef: MatDialogRef<SkillDialog>, private readonly resumeService: ResumeService) {
    this.skill = {
      competence: 0,
      name: ''
    };
  }

  ngOnInit(): void {
    // Assume edit mode if name isn't blank
    this.editMode = this.skill && this.skill.name.length > 0;
  }
}
