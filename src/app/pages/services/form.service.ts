import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/layout/components/error-message/error.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder, private errorService: ErrorService) {

  }

  getFormCreditGroups() {
    return this.formBuilder.group({
      step1: this.initStep1(),
      step2: this.initStep2(),
      step3: this.initStep3(),
      step4: this.initStep4()
    });
  }

  initStep1() {
    return this.formBuilder.group({
      amount: ['', [Validators.required]],
      term: ['', [Validators.required]],
      payDay: ['', [Validators.required]],
      salary: ['', [Validators.required]],
    },
      {
        validator: [
          this.errorService.checkIfCreditAvailable('salary', 'amount')
        ]
      });
  }

  initStep2() {
    return this.formBuilder.group({
      education: ['', [Validators.required]],
      position: ['', [Validators.required]],
      area: ['', [Validators.required]],
      employement: ['', [Validators.required]],
    });
  }

  initStep3() {
    return this.formBuilder.group({
      contractType: ['', [Validators.required]],
      maritalStatus: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    },
      {
        validator: [
          // this.formValidationService
        ]
      });
  }

  initStep4() {
    return this.formBuilder.group({
      agreement: ['', [Validators.required]],
    },
      {
        validator: [
          // this.formValidationService
        ]
      });
  }


}
