import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Step3 } from 'src/app/core/models/core.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  @Input() stepFields: Step3;
  @Input() passedFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
