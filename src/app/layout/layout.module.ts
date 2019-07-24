import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './components/steps/steps.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { HelpComponent } from './components/help/help.component';
import { WarningComponent } from './components/warning/warning.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { InfoComponent } from './components/info/info.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { DurationComponent } from './components/duration/duration.component';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { Step4Component } from './components/step4/step4.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SummaryComponent } from './components/summary/summary.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ErrorService } from './components/error-message/error.service';


const COMPONENTS = [StepsComponent,
  ButtonComponent, TitleComponent, SubtitleComponent,
  TableComponent, HeaderComponent, HelpComponent,
  WarningComponent, AgreementComponent, InfoComponent,
  BenefitsComponent, DurationComponent, SpecialOfferComponent,
  DisclaimerComponent, Step1Component,
  Step2Component, Step3Component, Step4Component,
  NavigationComponent,
  SummaryComponent,
  ErrorMessageComponent];
@NgModule({
  declarations: [
    ...COMPONENTS

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    ErrorService
  ]
})
export class LayoutModule { }
