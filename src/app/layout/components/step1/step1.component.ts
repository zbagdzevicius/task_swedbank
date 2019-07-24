import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Step1 } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  @Input() form: FormGroup;
  @Input() stepFields: Step1;

  constructor() { }

  ngOnInit() {
  }

}
