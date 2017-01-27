/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdIcon, MdIconRegistry, MaterialModule } from '@angular/material';

import { ResumeService } from '../resume.service';
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
        SummaryComponent
      ],
      providers: [
        { provide: ResumeService, useValue: {} },
      ],
      imports: [ MaterialModule.forRoot() ]
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
