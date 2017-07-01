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
    { name: 'Indigo', value: 'indigo' },
    { name: 'Light blue', value:'light-blue' },
    { name: 'Orange', value:'orange' },
    { name: 'Purple', value:'purple' },
    { name: 'Teal', value:'teal' }
  ];
  currentTheme: any;
  darkTheme: boolean = false;

  constructor(private resumeService: ResumeService) {
  }

  ngOnInit() {
    this.resume = this.resumeService.retrieveResume();

    // Listen to resume changed events
    this.resumeService.resumeChanged.subscribe(resume => this.resume = resume);

    // Retrieve theme
    const theme = this.resumeService.retrieveTheme();
    if (theme && theme.themeName) {
      this.currentTheme = this.themes.filter(t => t.value === theme.themeName).pop();
      this.darkTheme = theme.isDark;
    } else {
      // Indigo default theme
      this.currentTheme = this.themes[1];
      this.darkTheme = false;
    }
    this.darkTheme ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }

  cssClasses() {
    return this.currentTheme.value + (this.darkTheme ? ' dark' : '');
  }

  themeChanged(theme, dark) {
    this.resumeService.updateTheme(this.currentTheme.value, this.darkTheme);
    this.darkTheme ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }

}
