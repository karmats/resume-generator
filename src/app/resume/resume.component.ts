import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ResumeService } from '../resume.service';
import { Resume } from '../models';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

  resume: Resume;
  // Since we can't import colors from material, they need to be defined here as well
  // needed for meta tag 'theme-name'
  themes: Array<any> = [
    { name: 'Blue grey', value: 'blue-grey', primary: '#607d8b' },
    { name: 'Indigo', value: 'indigo', primary: '#3f51b5' },
    { name: 'Light blue', value: 'light-blue', primary: '#03a9f4' },
    { name: 'Orange', value: 'orange', primary: '#ff5722' },
    { name: 'Purple', value: 'purple', primary: '#9c27b0' },
    { name: 'Teal', value: 'teal', primary: '#009688' }
  ];
  currentTheme: any;
  darkTheme: boolean = false;
  resumeEmpty: boolean = true;
  snackBarRef;

  constructor(public resumeService: ResumeService,
    private overlayContainer: OverlayContainer,
    private meta: Meta,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.resume = this.resumeService.retrieveResume();
    this.resumeEmpty = Object.keys(this.resume).length <= 0
    this.showExportOption(!this.resumeEmpty);

    // Listen to resume changed events
    this.resumeService.resumeChanged.subscribe(resume => {
      this.resume = resume
      this.resumeEmpty = Object.keys(resume).length <= 0
      this.showExportOption(!this.resumeEmpty);
    });

    // Retrieve theme
    const theme = this.resumeService.retrieveTheme();
    const overlayClassList = this.overlayContainer.getContainerElement().classList;
    if (theme && theme.themeName) {
      const currTheme = this.themes.filter(t => t.value === theme.themeName).pop();
      this.changeTheme(currTheme, theme.isDark);
    } else {
      // Indigo default theme
      this.changeTheme(this.themes[1], false);
    }
  }

  cssClasses() {
    return this.currentTheme.value + (this.darkTheme ? ' dark' : '');
  }

  changeTheme(theme, dark) {
    this.currentTheme = theme;
    this.darkTheme = dark;
    const oldTheme = this.resumeService.retrieveTheme();

    const overlayClassList = this.overlayContainer.getContainerElement().classList;
    overlayClassList.remove(oldTheme.themeName);
    overlayClassList.add(theme.value);

    if (this.darkTheme) {
      document.body.classList.add('dark');
      overlayClassList.add('dark');
    } else {
      document.body.classList.remove('dark')
      overlayClassList.remove('dark');
    }
    this.meta.updateTag({ content: this.currentTheme.primary }, 'name="theme-color"')

    this.resumeService.updateTheme(this.currentTheme.value, this.darkTheme);
  }

  private showExportOption(show: boolean) {
    if (show) {
      this.snackBarRef = !this.snackBarRef ? this.snackBar.open('Export when done', 'HTML') : this.snackBarRef;
      this.snackBarRef.onAction().subscribe(() => {
        this.exportResume();
        this.snackBarRef.dismiss();
      })
    }
  }

  // Export resume to html
  private exportResume() {
    const doc = new DOMParser().parseFromString(document.body.outerHTML, 'text/html');
    doc.head.innerHTML = document.head.innerHTML;

    // Remove elements that shouldn't be in export
    const scriptTags = doc.querySelectorAll('script');
    this.removeTags(scriptTags);
    const snackBarContainer = doc.querySelectorAll('.cdk-overlay-container');
    this.removeTags(snackBarContainer);
    const title = doc.querySelectorAll('title');
    this.removeTags(title);

    const uriContent = "data:application/octet-stream," +
      encodeURIComponent(`
      <html>
        <head>
          <title>${this.resume.name}</title>
          ${doc.head.innerHTML}
        </head>
        ${doc.body.outerHTML}
      </html>`);
    window.open(uriContent, 'export');
  }

  private removeTags(tags: NodeListOf<Element>) {
    for (let i = 0; i < tags.length; i++) {
      const node = tags.item(i);
      node.parentNode.removeChild(node);
    }
  }
}
