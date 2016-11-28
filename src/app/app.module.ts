import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SummaryComponent } from './summary/summary.component';
import { PositionComponent } from './position/position.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';

import { ResumeService } from './resume.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SummaryComponent,
    PositionComponent,
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
