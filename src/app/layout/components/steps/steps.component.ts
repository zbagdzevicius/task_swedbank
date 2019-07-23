import { Component, OnInit, Input } from '@angular/core';
import { Step1 } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  @Input() steps: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
