import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'credit', component: CreditComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
