import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Step2 } from 'src/app/core/models/core.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  @Input() stepFields: Step2;
  @Input() passedFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
