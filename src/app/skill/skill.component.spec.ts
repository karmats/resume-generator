/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdIconModule, MdDialogModule, MdProgressBarModule } from '@angular/material';

import { ResumeService } from '../resume.service'
import { SkillComponent } from './skill.component';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SkillComponent
      ],
      providers: [{ provide: ResumeService, useValue: {} },],
      imports: [ MdIconModule, MdDialogModule, MdProgressBarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    component.skills = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
