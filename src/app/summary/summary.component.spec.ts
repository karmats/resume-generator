/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular/material';

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
        MdIcon
      ],
      providers: [
        { provide: MdIconRegistry, useValue: mdIconRegistryStub }
      ]
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
