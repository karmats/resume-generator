import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Resume } from '../models';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [ ResumeService ]
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private resumeService: ResumeService) {
    this.resume = <Resume>{}; 
  }

  ngOnInit() {
    this.resumeService.retrieveResume().then(resume => this.resume = resume);
  }

}
