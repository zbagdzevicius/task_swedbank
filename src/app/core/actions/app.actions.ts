import { Content, AppStateModel } from '../models/core.model';

export class SetLanguage {
    static readonly type = '[lang] set language';
    constructor(public payload: AppStateModel) { }
}

export class SetContent {
    static readonly type = '[content] set content';
    constructor(public payload: Content) { }
}