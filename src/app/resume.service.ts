import { Injectable } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { Resume, Position, Education, Skill } from './models'

@Injectable()
export class ResumeService {

  private STORAGE_KEY = 'resume';
  private RESUME: Resume = {
    name: 'Mats Roshauw',
    title: 'Frontend engineer',
    pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/010/3a0/1d2671f.jpg',
    summary: 'Good stuff dev',
    email: 'mats@mail.com',
    phone: '0707-777777',
    positions: [{
      company: 'Acando',
      companyLogoUrl: 'https://media.licdn.com/media/AAEAAQAAAAAAAAeBAAAAJDViZDYyYTRmLWQ3YWUtNGRmZS04NTdlLTNlZTk2NTA0MmJiOA.png',
      startDate: {
        year: 2011,
        month: 6
      },
      endDate: {
        year: 2013,
        month: 6
      },
      current: false,
      summary: 'Consulting stuffs',
      title: 'IT consultant'
    }, {
      company: 'Seal',
      companyLogoUrl: 'https://media.licdn.com/media/AAEAAQAAAAAAAAcWAAAAJGNkMTU0MzMxLTQ1MWEtNDZmZS05NTE3LTAyMDI5MmEwNTg0MQ.png',
      startDate: {
        year: 2013,
        month: 6
      },
      current: true,
      summary: 'Frontend stuffs',
      title: 'Frontend developer'
    }],
    educations: [{
      degree: 'Bachelor',
      school: 'Växjö Unversity',
      startDate: {
        year: 2003,
        month: 8
      },
      endDate: {
        year: 2006,
        month: 6
      },
      field: 'Computer science'
    }, {
      degree: 'Master',
      school: 'Chalmers Unversity',
      startDate: {
        year: 2006,
        month: 8
      },
      endDate: {
        year: 2007,
        month: 1
      },
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

  // Years and months to choose from when adding new content to resume
  years: Array<number> = [];
  months: Array<string> = [];
  // All posssible education degrees
  readonly degrees: Array<string> = [
    'Associate’s Degree',
    'Bachelor’s Degree',
    'Master’s Degree',
    'Master of Business Administration (M.B.A)',
    'Juris Doctor (J.D.)',
    'Doctor of Medicine (M.D.)',
    'Doctor of Philosophy (Ph.D.)',
    'Engineer’s Degree',
    'Other']

  // If in edit mode, possible to edit
  editMode: boolean;

  constructor(location: Location) {
    // Create years to choose from, 1950 - current years
    const today = new Date();
    for (let year = 1950; year <= today.getFullYear(); year++) {
      this.years.push(year);
    }
    // To get the name of the month, use the browsers language and angular DatePipe,
    // the position in the array will tell which js month it is
    const datePipe = new DatePipe(navigator.language);
    for (let month = 1; month <= 12; month++) {
      let dateString = `2016-${month < 10 ? '0' : ''}${month}-15`;
      this.months.push(datePipe.transform(dateString, 'MMMM '));
    }

    // Edit mode if path is /edit
    this.editMode = location.isCurrentPathEqualTo('/?edit');
  }

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

  /**
   * Adds a position to the saved resume and saves it.
   * 
   * @param   {Position}  position  The position to add
   * @return  {Array<Position>}     Updated positions array
   */
  addPosition(position: Position): Array<Position> {
    const currentResume = this.retrieveResume();
    currentResume.positions.push(position);
    this.saveResume(currentResume);
    return currentResume.positions;
  }

  /**
   * Update positions.
   * 
   * @param   {Array<Position>}   positions   The positons to update resume with
   * @return  {Array<Position>}               Updated positions
   */
  updatePositions(positions: Array<Position>): Array<Position> {
    const currentResume = this.retrieveResume();
    currentResume.positions = positions;
    this.saveResume(currentResume);
    return currentResume.positions;
  }

  /**
   * Removes a position.
   * 
   * @param   {Position}        position  The position to remove
   * @return  {Array<Position>}           Positions after the deletion
   */
  removePosition(position: Position): Array<Position> {
    const currentResume = this.retrieveResume();
    currentResume.positions = currentResume.positions.filter(p => p.company !== position.company);
    this.saveResume(currentResume);
    return currentResume.positions;
  }

  /**
   * Adds an education to the saved resume and saves it.
   * 
   * @param   {Education}  education  The education to add
   * @return  {Array<Education>}      Updated educations array
   */
  addEducation(education: Education): Array<Education> {
    const currentResume = this.retrieveResume();
    currentResume.educations.push(education);
    this.saveResume(currentResume);
    return currentResume.educations;
  }

  /**
   * Update educations.
   * 
   * @param   {Array<Education>}   educations   The educations to update resume with
   * @return  {Array<Education>}                Updated educations
   */
  updateEducations(educations: Array<Education>): Array<Education> {
    const currentResume = this.retrieveResume();
    currentResume.educations = educations;
    this.saveResume(currentResume);
    return currentResume.educations;
  }

  /**
   * Removes an education.
   * 
   * @param   {Education}        education  The education to remove
   * @return  {Array<Education>}            Educations after the deletion
   */
  removeEducation(education: Education): Array<Education> {
    const currentResume = this.retrieveResume();
    currentResume.educations = currentResume.educations.filter(e => e.school !== education.school);
    this.saveResume(currentResume);
    return currentResume.educations;
  }

  /**
   * Adds a skill to the saved resume and saves it.
   * 
   * @param   {Skill}  skill  The skill to add
   * @return  {Array<Skill>}  Updated skills array
   */
  addSkill(skill: Skill): Array<Skill> {
    const currentResume = this.retrieveResume();
    currentResume.skills.push(skill);
    this.saveResume(currentResume);
    return currentResume.skills;
  }

  /**
   * Update skills.
   * 
   * @param   {Array<Skill>}   skills     The skills to update resume with
   * @return  {Array<Skill>}              Updated skills
   */
  updateSkills(skills: Array<Skill>): Array<Skill> {
    const currentResume = this.retrieveResume();
    currentResume.skills = skills;
    this.saveResume(currentResume);
    return currentResume.skills;
  }

  /**
   * Removes a skill.
   * 
   * @param   {Skill}             skill   The skill to remove
   * @return  {Array<Skill>}              Skills after the deletion
   */
  removeSkill(skill: Skill): Array<Skill> {
    const currentResume = this.retrieveResume();
    currentResume.skills = currentResume.skills.filter(s => s.name !== skill.name);
    this.saveResume(currentResume);
    return currentResume.skills;
  }

  /**
   * Update resume personal information.
   */
  updateSummary(name: string, profileUrl: string, description: string, title: string,
                phone: string, email: string): Resume {
    const currentResume = this.retrieveResume();
    currentResume.name = name;
    currentResume.pictureUrl = profileUrl;
    currentResume.summary = description;
    currentResume.title = title;
    currentResume.phone = phone;
    currentResume.email = email;
    this.saveResume(currentResume);
    return currentResume;
  }
}
