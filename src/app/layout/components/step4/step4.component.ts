import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Step4 } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {
  @Input() form: FormGroup;
  @Input() stepFields: Step4;

  constructor() { }

  ngOnInit() {
  }

}
