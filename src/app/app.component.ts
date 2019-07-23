import { Component } from '@angular/core';
import { AppState } from './core/state/app.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Swedbank task';

  @Select(AppState.getLanguage) language$: Observable<string>;
  language: string;

  constructor(
    private languageService: LanguageService
  ) {
    this.language$.subscribe((language: string) => {
      if (language) {
        this.language = language;
        this.languageService.getContent(language);
      }
    })
  }

}
