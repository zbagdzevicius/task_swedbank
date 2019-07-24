import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Step2 } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  @Input() form: FormGroup;
  @Input() stepFields: Step2;

  constructor() { }

  ngOnInit() {
  }

}
