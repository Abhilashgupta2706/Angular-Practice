import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stepper-form-dialog-box',
  templateUrl: './stepper-form-dialog-box.component.html',
  styleUrls: ['./stepper-form-dialog-box.component.scss']
})
export class StepperFormDialogBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
