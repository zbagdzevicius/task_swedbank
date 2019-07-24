import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/core/state/app.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Credit } from 'src/app/core/models/core.model';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormService } from 'src/app/pages/services/form.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  @Select(AppState.getCredit) credit$: Observable<Credit>;
  credit: Credit;
  currentStep = 1;
  lastValidStep = 0;
  formGroups: FormGroup;

  constructor(private formService: FormService) {
    this.credit$
      .subscribe((credit: Credit) => {
        if (credit) {
          this.credit = credit;
        }
      })
    this.formGroups = this.formService.getFormCreditGroups();
  }

  ngOnInit() {
    ['step1', 'step2', 'step3', 'step4'].forEach(
      (value, index) => {
        this.formGroups.controls[value].statusChanges
          .subscribe((status: string) => {
            this.checkValidStatus(status, index);
          })
      }
    )
  }

  checkValidStatus(status, step: number) {
    if (status === "VALID") {
      if (this.currentStep > this.lastValidStep) {
        this.setValidStep(step + 1);
      }
    } else {
      this.setValidStep(step);
    }
  }

  setValidStep(step: number) {
    this.lastValidStep = step;
  }


}
