import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Navigation } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  currentStepValue: number;
  @Input() lastValidStep: number;
  @Input() navigation: Navigation;
  @Output() currentStepChange = new EventEmitter();

  @Input()
  get currentStep() {
    return this.currentStepValue;
  }

  set currentStep(stepValue) {
    this.currentStepValue = stepValue;
    this.currentStepChange.emit(this.currentStepValue);
  }

  nextStep() {
    this.currentStep++;
  }
  previousStep() {
    this.currentStep--;
  }

  constructor() { }

  ngOnInit() {
  }

}
