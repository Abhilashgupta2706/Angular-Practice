import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FormValidationComponent } from './Components/form-validation/form-validation.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormValidationDialogBoxComponent } from './Components/form-validation/form-validation-dialog-box/form-validation-dialog-box.component';
import { StepperFormComponent } from './Components/stepper-form/stepper-form.component';
import { HorizontalStepperComponent } from './Components/stepper-form/horizontal-stepper/horizontal-stepper.component';
import { VerticalStepperComponent } from './Components/stepper-form/vertical-stepper/vertical-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperFormDialogBoxComponent } from './Components/stepper-form/stepper-form-dialog-box/stepper-form-dialog-box.component';
import { DataAutocompleteComponent } from './Components/data-autocomplete/data-autocomplete.component';
import { ExcelReaderComponent } from './Components/excel-reader/excel-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormValidationComponent,
    NavBarComponent,
    FormValidationDialogBoxComponent,
    StepperFormComponent,
    HorizontalStepperComponent,
    VerticalStepperComponent,
    StepperFormDialogBoxComponent,
    DataAutocompleteComponent,
    ExcelReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatStepperModule
  ],
  exports: [
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
