import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/core/state/app.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Credit } from 'src/app/core/models/core.model';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/pages/services/form.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  @Select(AppState.getCredit) credit$: Observable<Credit>;
  credit: Credit;
  currentStep:number;
  formGroups: FormGroup;

  constructor(private formService: FormService) {
    this.formGroups = this.formService.getFormCreditGroups();
    this.credit$
      .subscribe((credit: Credit) => {
        if (credit) {
          this.credit = credit;
        }
      })
  }

  ngOnInit() {
  }

}
