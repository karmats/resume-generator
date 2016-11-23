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
      summary: 'Good stuff dev',
      positions: [{
        company: 'Acando',
        startDate: new Date(2011, 6),
        endDate: new Date(2013, 6),
        current: false,
        summary: 'Consulting stuffs',
        title: 'IT consultant'
      }, {
        company: 'Seal',
        startDate: new Date(2013, 6),
        current: true,
        summary: 'Frontend stuffs',
        title: 'Frontend developer'
      }],
      educations: [{
        degree: 'Bachelor',
        school: 'Växjö Unversity',
        startDate: new Date(2003, 8),
        endDate: new Date(2006, 6),
        field: 'Computer science'
      }, {
        degree: 'Master',
        school: 'Chalmers Unversity',
        startDate: new Date(2006, 8),
        endDate: new Date(2007, 1),
        field: 'Computer gaming'
      }]
    }
  }

  ngOnInit() {
  }

}
