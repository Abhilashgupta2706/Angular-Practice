import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidation } from 'src/app/DTOS/FormValidation';
import { MatDialog } from '@angular/material/dialog';
import { FormValidationDialogBoxComponent } from './form-validation-dialog-box/form-validation-dialog-box.component';

interface Profession {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss'],
})


export class FormValidationComponent implements OnInit {

  gender!: string;
  genderList: string[] = ['Male', 'Female', 'Others'];

  userInformation !: string[]

  professions: Profession[] = [
    { value: 'student-0', viewValue: 'Student' },
    { value: 'teacher-1', viewValue: 'Teacher' },
    { value: 'worker-2', viewValue: 'Worker' },
  ];

  userDetails: FormValidation = new FormValidation()
  userForm!: FormGroup

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(FormValidationDialogBoxComponent, {
      data: {
        'fname': this.userInformation[0],
        'lname': this.userInformation[1],
        'mobileNum': this.userInformation[2],
        'emailID': this.userInformation[3],
        'dob': this.userInformation[4],
        'gender': this.userInformation[5],
        'address': this.userInformation[6],
        'profession': this.userInformation[7],
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'fname': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'lname': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'mobileNum': new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      'emailID': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      'dob': new FormControl('', [Validators.required]),
      'gender': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
      'profession': new FormControl('', [Validators.required]),
    })
  }

  resetForm() {
    this.userForm.reset()
  }

  get f() { return this.userForm.controls }

  onSubmit() {
    var fname = this.userForm.value['fname']
    var lname = this.userForm.value['lname']
    var mobileNum = this.userForm.value['mobileNum']
    var emailID = this.userForm.value['emailID']
    var dob = this.userForm.value['dob']
    var gender = this.userForm.value['gender']
    var address = this.userForm.value['address']
    var profession = this.userForm.value['profession']

    this.userInformation = [fname, lname, mobileNum, emailID, dob, gender, address, profession]

    this.openDialog()

  }
}
