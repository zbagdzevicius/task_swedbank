import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Step1 } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  currentStepValue:number;
  @Input() steps: Array<string>;
  @Output() currentStepChange = new EventEmitter();
  
  @Input()
  get currentStep() {
    return this.currentStepValue;
  }
  
  set currentStep(stepValue) {
    this.currentStepValue = stepValue;
    this.currentStepChange.emit(this.currentStepValue);
  }

  changeStep(stepValue){
    console.log(stepValue);
    this.currentStep = stepValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
