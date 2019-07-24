import { Component, OnInit, Input } from '@angular/core';
import { Step1, Step4, Step3, Step2, Credit } from 'src/app/core/models/core.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() credit: Credit;
  @Input() formGroups: FormGroup;
  summaryStepValues: {
    amount: number,
    term: number,
    payDay: number,
    salary: number,
    education: number,
    position: number,
    area: number,
    employement: number,
    contractType: number,
    maritalStatus: number,
    phone: number,
    agreement: number
  }

  constructor() { }

  ngOnInit() {
    const summaryStep1Values = this.formGroups.controls['step1'].value;
    const summaryStep2Values = this.formGroups.controls['step2'].value;
    const summaryStep3Values = this.formGroups.controls['step3'].value;
    const summaryStep4Values = this.formGroups.controls['step4'].value;
    this.summaryStepValues = [
      summaryStep1Values,
      summaryStep2Values,
      summaryStep3Values,
      summaryStep4Values
    ].reduce(function (object, followingObject) {
      for (var key in followingObject) object[key] = followingObject[key];
      return object;
    }, {});
  }

}
