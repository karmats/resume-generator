import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SummaryComponent } from './summary/summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';

import { ResumeService } from './resume.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SummaryComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
