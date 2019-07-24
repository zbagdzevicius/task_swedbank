import { Component, OnInit, Input } from '@angular/core';
import { Navigation } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() navigation: Navigation;

  constructor() { }

  ngOnInit() {
  }

}
