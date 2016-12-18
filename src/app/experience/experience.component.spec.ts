/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdCard, MdCardActions, MdDialog, MdList, MdListItem } from '@angular/material';

import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  const mdDialogStub = {
    open: () => {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExperienceComponent,
        MdCard,
        MdCardActions,
        MdList,
        MdListItem
      ],
      providers: [
        { provide: MdDialog, useValue: mdDialogStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
