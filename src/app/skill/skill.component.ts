import { Component, Input, ViewContainerRef, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { ResumeService } from '../resume.service';
import { Skill } from '../models';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skills:Array<Skill>;

  constructor(private dialog: MdDialog, private resumeService: ResumeService, private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.sortSkills();
  }

  newSkill() {
    const config = new MdDialogConfig();
    config.width = "50%";
    const dialogRef = this.dialog.open(SkillDialog, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.skills = this.resumeService.addSkill(result);
        this.sortSkills();
      }
    });
  }

  editSkill(skill: Skill) {
    const config = new MdDialogConfig();
    config.width = "50%";
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(SkillDialog, config);
    dialogRef.componentInstance.skill = skill;

    dialogRef.afterClosed().subscribe(result => {
      this.skills = result ? this.resumeService.updateSkills(this.skills) :
            this.resumeService.retrieveResume().skills;
      this.sortSkills();
    });
  }

  deleteSkill(skill: Skill) {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, config);
    dialogRef.componentInstance.message = `Are you sure you want to remove your skill in ${skill.name}?`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.skills = this.resumeService.removeSkill(skill);
      }
    })
  }

  // Sort by competence first, name second
  private sortSkills() {
    this.skills.sort((a, b) => {
      if (a.competence !== b.competence) {
        return b.competence - a.competence;
      }
      return a.name > b.name ? 1 : -1
    });
  }
}

// Add new skill dialog
@Component({
  template: `
    <h3 md-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}skill</h3>
    <div md-dialog-content fxLayout="column">
      <md-input-container>
        <input mdInput
          [(ngModel)]="skill.name"
          placeholder="Skill name">
      </md-input-container>
      <md-slider
        [(ngModel)]="skill.competence"
        min="0"
        max="100"
        thumbLabel
        step="10"
        tickInterval="1"></md-slider>
    </div>
    <div md-dialog-actions>
      <button md-button color="primary" (click)="dialogRef.close()">Cancel</button>
      <button md-button color="primary" (click)="dialogRef.close(skill)">Save</button>
    </div>
  `,
})
export class SkillDialog implements OnInit {
  public skill: Skill;
  public editMode: boolean;

  constructor(public dialogRef: MdDialogRef<SkillDialog>, private resumeService: ResumeService) {
    const today = new Date();
    this.skill = {
      competence: 0,
      name: ''
    }
  }

  ngOnInit() {
    // Assume edit mode if name isn't blank
    this.editMode = this.skill && this.skill.name.length > 0;
  }

}
