import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Resume } from '../models';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

  resume: Resume;
  themes: Array<any> = [
    { name: 'Blue grey', value:'blue-grey' },
    { name: 'Indigo', value: '' },
    { name: 'Orange', value:'orange' },
    { name: 'Purple', value:'purple' },
    { name: 'Teal', value:'teal' }
  ];
  // Indigo default theme
  currentTheme: string = this.themes[1].value;
  darkTheme: boolean = false;

  constructor(private resumeService: ResumeService) {
  }

  ngOnInit() {
    this.resume = this.resumeService.retrieveResume();
    // Listen to resume changed events
    this.resumeService.resumeChanged.subscribe(resume => this.resume = resume);
  }

  cssClasses() {
    return this.currentTheme + (this.darkTheme ? ' dark' : '');
  }

}
