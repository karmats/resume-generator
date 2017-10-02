import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdSelectModule, MdSlideToggleModule, MdTooltipModule, MdAutocompleteModule,
MdProgressBarModule, MdDialogModule, MdIconModule, MdButtonModule, MdCardModule, MdInputModule,
MdListModule, MdSliderModule, MdCheckboxModule } from '@angular/material';
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
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdTooltipModule,
    MdAutocompleteModule,
    MdProgressBarModule,
    MdDialogModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdSliderModule,
    MdCheckboxModule
  ],
  providers: [ResumeService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
