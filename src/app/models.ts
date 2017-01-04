export interface Resume {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    pictureUrl: string;
    positions: Array<Position>;
    educations: Array<Education>;
    skills: Array<Skill>;
}

export interface Position {
    title: string;
    summary?: string;
    startDate: YearAndMonth;
    endDate?: YearAndMonth;
    current: boolean;
    company: string;
    companyLogoUrl?: string;
}

export interface Education {
    school: string;
    field: string;
    startDate: YearAndMonth;
    endDate?: YearAndMonth;
    degree?: string;
}

export interface Skill {
    name: string;
    competence: number;
}

export interface YearAndMonth {
    year: number,
    month: number;
}
