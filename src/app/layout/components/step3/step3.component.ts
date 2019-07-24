import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Step3 } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  @Input() form: FormGroup;
  @Input() stepFields: Step3;

  constructor() { }

  ngOnInit() {
  }

}
