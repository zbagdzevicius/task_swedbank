import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CreditComponent } from './credit/credit.component';
import { LayoutModule } from '../layout/layout.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormService } from './services/form.service';


@NgModule({
  declarations: [LandingComponent, CreditComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule
  ], providers: [
    FormService
  ]
})
export class PagesModule { }
