import { Component, Input, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ResumeService } from '../resume.service';
import { Skill } from '../models';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skills:Array<Skill>;
  firstList: Array<Skill>;
  secondList: Array<Skill>;

  constructor(private dialog: MdDialog, private resumeService: ResumeService) {
   }

  ngOnInit() {
    this.skillsToTwoLists();
  }

  newSkill() {
    const dialogRef = this.dialog.open(NewSkillDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.skills = this.resumeService.addSkill(result);
      this.skillsToTwoLists();
    });
  }

  // Since skill lists are in two columns, split skill list to a tuple
  skillsToTwoLists() {
    [this.firstList, this.secondList] = this.skills.reduce((acc, curr, idx) => {
      if (idx % 2 === 0) {
        acc[0].push(curr);
      } else {
        acc[1].push(curr);
      }
      return acc;
    },[[], []]);
  }
}

// Add new skill dialog
@Component({
  template: `
    <h3 class="dialog-header">Add new skill</h3>
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
      <button md-button color="primary" (click)="dialogRef.close()">CANCEL</button>
      <button md-button color="primary" (click)="dialogRef.close(skill)">ADD</button>
    </div>
  `,
})
export class NewSkillDialog {
  public skill: Skill;

  constructor(public dialogRef: MdDialogRef<NewSkillDialog>, private resumeService: ResumeService) {
    const today = new Date();
    this.skill = {
      competence: 0,
      name: ''
    }

  }
}
