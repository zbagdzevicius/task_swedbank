import { State, Action, StateContext, Selector} from '@ngxs/store';
import { AppStateModel, Step1, Step2, Step3, Step4, Credit, Landing,  Content } from '../models/core.model';
import { SetLanguage, SetContent } from '../actions/app.actions';


@State<AppStateModel>({
    name: 'app',
    defaults: {
        language: 'lt',
        content: null
    }
})

export class AppState {
    @Selector()
    static getLanguage(appState: AppStateModel) {
        return appState.language;
    }

    @Selector()
    static getCredit(content: Content) {
        return content.credit;
    }
    
    @Selector()
    static getLanding(content: Content) {
        return content.landing;
    }

    @Action(SetLanguage)
    setLanguage(context: StateContext<string>, { payload }: SetLanguage) {
        context.patchState(payload);
    }

    @Action(SetContent)
    setContent(context: StateContext<Content>, { payload }: SetContent) {
        context.patchState(payload);
    }

}
