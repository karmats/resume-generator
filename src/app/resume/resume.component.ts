import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
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
  resumeEmpty: boolean = true;

  constructor(public resumeService: ResumeService,
              private overlayContainer: OverlayContainer) {
  }

  ngOnInit() {
    this.resume = this.resumeService.retrieveResume();
    this.resumeEmpty = Object.keys(this.resume).length <= 0

    // Listen to resume changed events
    this.resumeService.resumeChanged.subscribe(resume => {
      this.resume = resume
      this.resumeEmpty = Object.keys(resume).length <= 0
    });

    // Retrieve theme
    const theme = this.resumeService.retrieveTheme();
    const overlayClassList = this.overlayContainer.getContainerElement().classList;
    if (theme && theme.themeName) {
      this.currentTheme = this.themes.filter(t => t.value === theme.themeName).pop();
      overlayClassList.add(theme.themeName);
      this.darkTheme = theme.isDark;
    } else {
      // Indigo default theme
      this.currentTheme = this.themes[1];
      this.darkTheme = false;
      overlayClassList.add(this.themes[1].value);
    }
    if (this.darkTheme) {
      document.body.classList.add('dark');
      overlayClassList.add('dark');
    } else {
      document.body.classList.remove('dark');
      overlayClassList.remove('dark');
    }
  }

  cssClasses() {
    return this.currentTheme.value + (this.darkTheme ? ' dark' : '');
  }

  themeChanged(theme, dark) {
    const oldTheme = this.resumeService.retrieveTheme();

    const overlayClassList = this.overlayContainer.getContainerElement().classList;
    overlayClassList.remove(oldTheme.themeName);
    overlayClassList.add(this.currentTheme.value);

    if (this.darkTheme) {
      document.body.classList.add('dark');
      overlayClassList.add('dark');
    } else {
      document.body.classList.remove('dark')
      overlayClassList.remove('dark');
    }

    this.resumeService.updateTheme(this.currentTheme.value, this.darkTheme);
  }

}
