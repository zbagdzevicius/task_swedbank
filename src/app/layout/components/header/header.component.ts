import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() currentLanguage: string;
  availableLanguages = environment.availableLanguages;

  constructor() { }

  ngOnInit() {
  }

}
