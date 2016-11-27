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
    startDate: Date;
    endDate?: Date;
    current: boolean;
    company: string;
    companyLogoUrl?: string;
}

export interface Education {
    school: string;
    field: string;
    startDate: Date;
    endDate?: Date;
    degree?: string;
}

export interface Skill {
    name: string;
    competence: number;
}
