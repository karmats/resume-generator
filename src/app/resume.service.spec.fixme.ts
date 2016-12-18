/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  beforeEach(() => {
    const datePipeStub = { transform: (str, pattern) => '' };
    TestBed.configureTestingModule({
      providers: [
        { provide: DatePipe, useValue: datePipeStub },
        ResumeService
      ]
    });
  });

  it('should create', inject([ResumeService], (service: ResumeService) => {
    expect(service).toBeTruthy();
  }));
});
