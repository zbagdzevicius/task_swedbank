export interface AppStateModel {
    language: string;
    content: Content;
}

export interface Content {
    landing: Landing;
    credit: Credit;
}

export interface Credit {
    currency: string;
    title: string;
    navigation: Navigation;
    info: string;
    steps: string[];
    step1: Step1;
    step2: Step2;
    step3: Step3;
    step4: Step4;
}

export interface Step4 {
    table: Table;
    disclaimer: string[];
    agreement: Agreement;
    submit: string;
}

export interface Agreement {
    agree: string;
    disagree: string;
}

export interface Table {
    title: string;
}

export interface Step3 {
    subtitle: string;
    contractType: Education;
    maritalStatus: Education;
    phone: Phone;
}

export interface Phone {
    text: string;
    languages: Languages;
}

export interface Languages {
    lt: string;
    se: string;
}

export interface Step2 {
    subtitle: string;
    education: Education;
    position: Education;
    area: Education;
    employement: Education;
}

export interface Education {
    text: string;
    select: string[];
}

export interface Step1 {
    application: Application;
    Income: Income;
}

export interface Income {
    subtitle: string;
    warning: string;
    salary: Salary;
}

export interface Salary {
    text: string;
    more: string;
}

export interface Application {
    amount: Amount;
    term: Amount;
    payDay: PayDay;
}

export interface PayDay {
    text: string;
    select: number[];
}

export interface Amount {
    text: string;
    from: number;
    step: number;
    to: number;
}

export interface Navigation {
    next: string;
    back: string;
}

export interface Landing {
    title: string;
    headline: string;
    specialOffer: string;
    benefitList: string[];
    duration: string;
    applicationButton: string;
    note: string;
}