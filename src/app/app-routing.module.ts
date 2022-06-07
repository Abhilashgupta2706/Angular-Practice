import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationComponent } from './Components/form-validation/form-validation.component';
import { HomeComponent } from './Components/home/home.component';
import { HorizontalStepperComponent } from './Components/stepper-form/horizontal-stepper/horizontal-stepper.component';
import { StepperFormComponent } from './Components/stepper-form/stepper-form.component';
import { VerticalStepperComponent } from './Components/stepper-form/vertical-stepper/vertical-stepper.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form-validation', component: FormValidationComponent },
  {
    path: 'stepper-form',
    component: StepperFormComponent,
    children: [
      { path: 'horizontal-stepper', component: HorizontalStepperComponent },
      { path: 'vertical-stepper', component: VerticalStepperComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
