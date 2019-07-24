import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from './form-validation.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder, private formValidationService: FormValidationService) {

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
          // this.formValidationService
        ]
      });
  }

  initStep2() {
    return this.formBuilder.group({
      education: ['', [Validators.required]],
      position: ['', [Validators.required]],
      area: ['', [Validators.required]],
      employement: ['', [Validators.required]],
    },
      {
        validator: [
          // this.formValidationService
        ]
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
