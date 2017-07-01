/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdIcon, MdIconRegistry, MaterialModule } from '@angular/material';

import { ResumeService } from '../resume.service';
import { SkillComponent } from '../skill/skill.component';
import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  const mdIconRegistryStub = {
    getDefaultFontSetClass: () => {}
  };
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SummaryComponent,
        SkillComponent
      ],
      providers: [
        { provide: ResumeService, useValue: {} }
      ],
      imports: [ MaterialModule, HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
