import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './components/steps/steps.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { HelpComponent } from './components/help/help.component';
import { WarningComponent } from './components/warning/warning.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { InfoComponent } from './components/info/info.component';



@NgModule({
  declarations: [StepsComponent, InputComponent, SelectComponent, ButtonComponent, TitleComponent, SubtitleComponent, TableComponent, HeaderComponent, HelpComponent, WarningComponent, AgreementComponent, InfoComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
