import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../models';
import { ResumeService } from '../resume.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() educations: Array<Education>;
  months: Array<string>

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.months = this.resumeService.months;
  }

  newEducation() {
    console.log('Add new edcuation');
  }
}
