import { Component, OnInit } from '@angular/core';
import { Resume } from '../models'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor() {
    this.resume = <Resume>{
      firstName: 'Mats',
      lastName: 'Roshauw',
      pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/010/3a0/1d2671f.jpg',
      summary: "Good stuff dev"
    }
  }

  ngOnInit() {
  }

}
