import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../models';
import { ResumeService } from '../resume.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() projects: Array<Project>;
  months: Array<string>;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.months = this.resumeService.months;
  }

}
