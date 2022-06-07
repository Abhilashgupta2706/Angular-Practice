import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-form-validation-dialog-box',
  templateUrl: './form-validation-dialog-box.component.html',
  styleUrls: ['./form-validation-dialog-box.component.scss']
})
export class FormValidationDialogBoxComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
