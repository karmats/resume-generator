import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() name: string;
  @Input('picture') profileUrl: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
