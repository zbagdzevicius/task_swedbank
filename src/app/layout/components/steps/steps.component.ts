import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  currentStepValue: number;
  @Input() lastValidStep: number;
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

  changeStep(stepValue) {
    if (this.lastValidStep >= stepValue - 1) {
      this.currentStep = stepValue;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
