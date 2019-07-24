import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Content } from '../models/core.model';
import { SetContent, SetLanguage } from '../actions/app.actions';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient, private store: Store) {
  }

  getContent(language: string) {
    this.http.get(`assets/${language}.json`)
      .subscribe((content: Content) => {
        this.store.dispatch(new SetContent(content));
        this.store.dispatch(new SetLanguage({ language, content }));
      }
      );
  }
}
