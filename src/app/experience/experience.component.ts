import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../models'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() positions: Array<Position>;

  constructor() { }

  ngOnInit() {
  }

  newPosition() {
    console.log('Add new position');
  }
}
