import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../models'

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  @Input() positions: Array<Position>;

  constructor() { }

  ngOnInit() {
  }

  newPosition() {
    console.log('Add new position');
  }
}
