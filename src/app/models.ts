export interface Resume {
    pictureUrl: string;
    firstName: string;
    lastName: string;
    summary: string;
    positions: Array<Position>;
}

export interface Position {
    title: string;
    summary: string;
    startDate: Date;
    endDate: Date;
    current: boolean;
    company: string;
}

export interface Education {
    school: string;
    field: string;
    startDate: Date;
    endDate: Date;
    degree: string;
}
