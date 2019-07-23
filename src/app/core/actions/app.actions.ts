import { Content } from '../models/core.model';

export class SetLanguage {
    static readonly type = '[lang] set language';
    constructor(public payload: string) { }
}

export class SetContent {
    static readonly type = '[content] set content';
    constructor(public payload: Content) { }
}