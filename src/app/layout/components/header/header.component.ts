import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() currentLanguage: string;
  availableLanguages = environment.availableLanguages;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  changeLanguage(language: string) {
    this.languageService.getContent(language);
    
  }

}
