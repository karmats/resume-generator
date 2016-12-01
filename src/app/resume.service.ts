import { Injectable } from '@angular/core';
import { Resume } from './models'

@Injectable()
export class ResumeService {

  private STORAGE_KEY = 'resume';
  private RESUME: Resume = {
    name: 'Mats Roshauw',
    title: 'Frontend engineer',
    pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/010/3a0/1d2671f.jpg',
    summary: 'Good stuff dev',
    email: 'karmats@gmail.com',
    phone: '0730-825481',
    positions: [{
      company: 'Acando',
      companyLogoUrl: 'https://media.licdn.com/media/AAEAAQAAAAAAAAeBAAAAJDViZDYyYTRmLWQ3YWUtNGRmZS04NTdlLTNlZTk2NTA0MmJiOA.png',
      startDate: new Date(2011, 6),
      endDate: new Date(2013, 6),
      current: false,
      summary: 'Consulting stuffs',
      title: 'IT consultant'
    }, {
      company: 'Seal',
      companyLogoUrl: 'https://media.licdn.com/media/AAEAAQAAAAAAAAcWAAAAJGNkMTU0MzMxLTQ1MWEtNDZmZS05NTE3LTAyMDI5MmEwNTg0MQ.png',
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
    }],
    skills: [{
      name: 'Angular',
      competence: 90
    }, {
      name: 'React',
      competence: 60
    }, {
      name: 'Javascript',
      competence: 80
    }]
  }

  constructor() { }

  /**
   * Saves resume in browser
   * 
   * @param {Resume}  resume  The resume to store
   */
  saveResume(resume: Resume) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(resume));
  }

  /**
   * Retrive last saved resume stored in browser
   * 
   * @return {Resume}  Latest stored resume
   */
  retrieveResume(): Resume {
    const resumeAsString = localStorage.getItem(this.STORAGE_KEY);
    return resumeAsString ? JSON.parse(resumeAsString) : this.RESUME;
  }
}
