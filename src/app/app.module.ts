import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SummaryComponent, EditSummaryDialog } from './summary/summary.component';
import { ExperienceComponent, PositionDialog } from './experience/experience.component';
import { EducationComponent, EducationDialog } from './education/education.component';
import { SkillComponent, SkillDialog } from './skill/skill.component';

import { ResumeService } from './resume.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ProjectComponent, ProjectDialog } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SummaryComponent,
    EditSummaryDialog,
    ExperienceComponent,
    PositionDialog,
    EducationDialog,
    SkillDialog,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
    ProjectDialog,
    ConfirmDialogComponent
  ],
  entryComponents: [
    EducationDialog,
    PositionDialog,
    SkillDialog,
    EditSummaryDialog,
    ProjectDialog,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule.forRoot()
  ],
  providers: [ResumeService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
