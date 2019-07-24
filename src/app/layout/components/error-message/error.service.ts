import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppState } from 'src/app/core/state/app.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  @Select(AppState.getLanguage) language$: Observable<string>;
  language: string;

  public config = {
    lt: {
      required: 'Laukelis yra privalomas',
      invalidMatch: 'Kreditas negali būti didesnis nei 20 algų suma'
    },
    en: {
      required: 'Field is required',
      invalidMatch: 'Credit can\`t be bigger than 20 salaries'
    }
  };

  constructor(
  ) {
    this.language$
      .subscribe((language: string) => {
        this.language = language;
      })
  }

  public getValidatorErrorMessage(validatorName: string) {
    console.log(this.language);
    if (this.language) {
      return this.config[this.language][validatorName];
    } else {
      return this.config['lt'][validatorName];
    }
  }

  public checkIfCreditAvailable(controlName: string, matchingControlName: string) {

    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.invalidMatch) {
        return;
      }

      if (control.value * 20 < matchingControl.value) {
        matchingControl.setErrors({ 'invalidMatch': true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }


}
