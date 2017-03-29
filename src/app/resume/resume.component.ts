import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Resume } from '../models';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private resumeService: ResumeService) {
  }

  ngOnInit() {
    this.resume = this.resumeService.retrieveResume();
    // Listen to resume changed events
    this.resumeService.resumeChanged.subscribe(resume => this.resume = resume);
  }

}
