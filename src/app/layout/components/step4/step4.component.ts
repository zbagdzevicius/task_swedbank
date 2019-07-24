import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Step4, Step1 } from 'src/app/core/models/core.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {
  @Input() stepFields: Step4;
  @Input() passedFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
