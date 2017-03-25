import { EventEmitter, Injectable } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { Resume, Position, Education, Skill, Project, YearAndMonth } from './models'

@Injectable()
export class ResumeService {
  public resumeChanged: EventEmitter<Resume>;

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
    projects: [{
      name: 'GoCD monitor',
      description: 'Build monitor for Go cd build server. Techniques included ReactJS and NodeJS',
      startDate: {
        year: 2016,
        month: 1
      },
      current: true,
      imageUrl: 'https://www.gocd.io/assets/images/blog/gocd-versions/gocd_15_2-d6c97247.png',
      web: 'https://github.com/karmats/gocd-monitor'
    },
    {
      name: 'Resume Generator',
      description: 'Generates a resume in material design, that can be stored and put up on your website. Written in Angular 2.',
      startDate: {
        year: 2016,
        month: 10
      },
      current: true,
      imageUrl: 'https://d13yacurqjgara.cloudfront.net/users/36126/screenshots/2228873/rb-logo_1x.png',
      web: 'https://github.com/karmats/resume-generator'
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
    // EventEmitter to let components know when the resume is changed
    this.resumeChanged = new EventEmitter(false);

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
   * Adds a project to the saved resume and saves it.
   * 
   * @param   {Project}         project   The project to add
   * @return  {Array<Project>}            Updated projects array
   */
  addProject(project: Project): Array<Project> {
    const currentResume = this.retrieveResume();
    currentResume.projects.push(project);
    this.saveResume(currentResume);
    return currentResume.projects;
  }

  /**
   * Update projects.
   * 
   * @param   {Array<Project>}    projects     The projects to update resume with
   * @return  {Array<Project>}                 Updated projects
   */
  updateProjects(projects: Array<Project>): Array<Project> {
    const currentResume = this.retrieveResume();
    currentResume.projects = projects;
    this.saveResume(currentResume);
    return currentResume.projects;
  }

  /**
   * Removes a project.
   * 
   * @param   {Project}             project   The project to remove
   * @return  {Array<Project>}                Projects after the deletion
   */
  removeProject(project: Project): Array<Project> {
    const currentResume = this.retrieveResume();
    currentResume.projects = currentResume.projects.filter(s => s.name !== project.name);
    this.saveResume(currentResume);
    return currentResume.projects;
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

  /**
   * Parse and save a resume stored in the standardized json resume format (https://github.com/jsonresume/resume-schema/blob/0.0.0/schema.json)
   * 
   * @param jsonResume A json resume object
   */
  parseAndSaveJsonResume(jsonResume) {
    const basics = jsonResume.basics;
    const resume: Resume = {
      name: basics.name,
      title: basics.label,
      summary: basics.summary,
      phone: basics.phone,
      email: basics.email,
      pictureUrl: basics.picture,
      positions: jsonResume.work.map(w => {
        const sd = this.dateAsYearMonth(new Date(w.startDate));
        const ed = w.endDate ? this.dateAsYearMonth(new Date(w.endDate)) : null;
        return {
          title: w.company,
          summary: w.summary,
          startDate: sd,
          endDate: ed,
          current: ed === null,
          company: w.company
        }
      }),
      educations: jsonResume.education.map(e => {
        const sd = this.dateAsYearMonth(new Date(e.startDate));
        const ed = e.endDate ? this.dateAsYearMonth(new Date(e.endDate)) : null;
        return {
          school: e.institution,
          field: e.area,
          startDate: sd,
          endDate: ed,
          current: ed === null,
          degree: e.studyType
        }
      }),
      skills: jsonResume.skills.map(s => {
        return {
          name: s.name,
          competence: 0
        }
      }),
      projects: jsonResume.projects.map(p => {
        const sd = this.dateAsYearMonth(new Date(p.startDate));
        const ed = p.endDate ? this.dateAsYearMonth(new Date(p.endDate)) : null;
        return {
          name: p.name,
          description: p.summary,
          startDate: sd,
          endDate: ed,
          current: ed === null,
          web: p.url
        }
      })
    }
    this.saveResume(resume);

    // Tell components resume has changed
    this.resumeChanged.emit(resume);
  }

  /**
   * @return {YearAndMonth}   Todays date as YearAndMonth object
   */
  todayAsYearMonth(): YearAndMonth {
    return this.dateAsYearMonth(new Date());
  }

  /**
   * @return  {YearAndMonth}   A date as YearAndMonth object
   */
  dateAsYearMonth(d: Date): YearAndMonth {
    return d ? {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth()
    } : null
  }
}
