/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { ResumeService } from '../resume.service';
import { SkillComponent } from '../skill/skill.component';
import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  const matIconRegistryStub = {
    getDefaultFontSetClass: () => {}
  };
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryComponent, SkillComponent],
      providers: [{ provide: ResumeService, useValue: {} }],
      imports: [MatIconModule, MatProgressBarModule, MatDialogModule, HttpModule, HttpClientModule, MatCardModule]
    }).compileComponents();
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
