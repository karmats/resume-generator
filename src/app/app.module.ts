import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SummaryComponent, EditSummaryDialog } from './summary/summary.component';
import { ExperienceComponent, NewPositionDialog } from './experience/experience.component';
import { EducationComponent, NewEducationDialog } from './education/education.component';
import { SkillComponent, NewSkillDialog } from './skill/skill.component';

import { ResumeService } from './resume.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SummaryComponent,
    EditSummaryDialog,
    ExperienceComponent,
    NewPositionDialog,
    NewEducationDialog,
    NewSkillDialog,
    EducationComponent,
    SkillComponent
  ],
  entryComponents: [
    NewEducationDialog,
    NewPositionDialog,
    NewSkillDialog,
    EditSummaryDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ResumeService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
