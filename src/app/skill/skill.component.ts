import { Component, Input, ViewContainerRef, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ResumeService } from '../resume.service';
import { Skill } from '../models';

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
  }

  newSkill() {
    const dialogRef = this.dialog.open(SkillDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.skills = this.resumeService.addSkill(result);
    });
  }

  editSkill(skill: Skill) {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    const dialogRef = this.dialog.open(SkillDialog, config);
    dialogRef.componentInstance.skill = skill;

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.skills = this.resumeService.updateSkills(this.skills);
    });
  }
}

// Add new skill dialog
@Component({
  template: `
    <h3 class="dialog-header">{{editMode ? 'Edit ' : 'Add new '}}skill</h3>
    <div class="dialog-content row">
      <md-input-container class="col-md-12">
        <input md-input
          [(ngModel)]="skill.name"
          placeholder="Competence name">
      </md-input-container>
      <md-slider
        class="col-md-12"
        [(ngModel)]="skill.competence"
        min="0"
        max="100"
        thumbLabel
        step="10"
        tickInterval="1"></md-slider>
    </div>
    <div class="dialog-footer">
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
