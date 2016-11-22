import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-summary',
  templateUrl: './resume-summary.component.html',
  styleUrls: ['./resume-summary.component.css']
})
export class ResumeSummaryComponent implements OnInit {
  @Input() name: string;
  @Input('picture') profileUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
