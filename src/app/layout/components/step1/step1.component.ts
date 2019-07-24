import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Step1 } from 'src/app/core/models/core.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  @Input() passedFormGroup: FormGroup;
  @Input() stepFields: Step1;
  amountValue: number;
  termValue: number;

  constructor() { }

  ngOnInit() {
  }

}
