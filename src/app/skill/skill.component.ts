import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {
   }

  ngOnInit() {
    // Since skill lists are in two columns, split skill list to a tuple
    [this.firstList, this.secondList] = this.skills.reduce((acc, curr, idx) => {
      if (idx % 2 === 0) {
        acc[0].push(curr);
      } else {
        acc[1].push(curr);
      }
      return acc;
    },[[], []]);
  }

  newSkill() {
    console.log('Add new skill');
  }
}
