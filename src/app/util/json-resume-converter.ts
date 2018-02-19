import { Resume, SocialType, Social, YearAndMonth } from "app/models";

/**
 * @param jsonResume The json resume json to parse
 * @return {Resume} A Resume object
 */
export function jsonResumeToResume(jsonResume): Resume {
    const dateAsYearMonth = (d: Date): YearAndMonth => {
        return d ? {
            year: d.getUTCFullYear(),
            month: d.getUTCMonth()
        } : null
    }
    const basics = jsonResume.basics;
    return {
        name: basics.name,
        title: basics.label,
        summary: basics.summary,
        phone: basics.phone,
        email: basics.email,
        pictureUrl: basics.picture,
        social: basics.profiles.map(profile => {
            const network: string = profile.network.toLowerCase();
            const social: Social = { url: profile.url, type: SocialType.UNKNOWN }
            if (network.includes('twitter')) {
                social.type = SocialType.TWITTER;
            } else if (network.includes('facebook')) {
                social.type = SocialType.FACEBOOK;
            } else if (network.includes('linkedin')) {
                social.type = SocialType.LINKEDIN;
            } else if (network.includes('github')) {
                social.type = SocialType.GITHUB;
            } else if (network.includes('instagram')) {
                social.type = SocialType.INSTAGRAM;
            }
            return social;
        }),
        positions: jsonResume.work.map(w => {
            const sd = dateAsYearMonth(new Date(w.startDate));
            const ed = w.endDate ? dateAsYearMonth(new Date(w.endDate)) : null;
            return {
                title: w.position,
                summary: w.summary,
                startDate: sd,
                endDate: ed,
                current: ed === null,
                company: w.company
            }
        }),
        educations: jsonResume.education.map(e => {
            const sd = dateAsYearMonth(new Date(e.startDate));
            const ed = e.endDate ? dateAsYearMonth(new Date(e.endDate)) : null;
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
            const sd = dateAsYearMonth(new Date(p.startDate));
            const ed = p.endDate ? dateAsYearMonth(new Date(p.endDate)) : null;
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
}

/**
 * @param {Resume} resume The resume object to convert to json-resume
 * @return Resume in json resume format
 */
export function resumeToJsonResume(resume: Resume) {
    const yearMonthToDate = (yearAndMonth: YearAndMonth): string => {
        const month = yearAndMonth.month.toString().length === 1 ? `0${yearAndMonth.month + 1}` : yearAndMonth.month + 1;
        return `${yearAndMonth.year}-${month}-01`;
    }
    return {
        basics: {
            name: resume.name,
            label: resume.title,
            summary: resume.summary,
            phone: resume.phone,
            email: resume.email,
            picture: resume.pictureUrl,
            profiles: resume.social.map(s => {
                return { network: s.type.toLowerCase(), url: s.url, username: '' }
            })
        },
        work: resume.positions.map(p => {
            return {
                company: p.company,
                position: p.title,
                summary: p.summary,
                startDate: yearMonthToDate(p.startDate),
                endDate: p.current ? null : yearMonthToDate(p.endDate)
            }
        }),
        education: resume.educations.map(e => {
            return {
                institution: e.school,
                area: e.field,
                studyType: e.degree,
                startDate: yearMonthToDate(e.startDate),
                endDate: e.current ? null : yearMonthToDate(e.endDate)
            }
        }),
        skills: resume.skills.map(s => {
            return {
                name: s.name,
                level: s.competence
            }
        }),
        projects: resume.projects.map(p => {
            return {
                name: p.name,
                summary: p.description,
                url: p.web,
                startDate: yearMonthToDate(p.startDate),
                endDate: p.current ? null : yearMonthToDate(p.endDate)
            }
        })
    }
}
