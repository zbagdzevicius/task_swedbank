import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/core/state/app.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Landing } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Select(AppState.getLanding) landing$: Observable<Landing>;
  landing: Landing;

  constructor() {
    this.landing$
      .subscribe((landing: Landing) => {
        if (landing) {
          this.landing = landing;
        }
      });
  }

  ngOnInit() {
  }

}
