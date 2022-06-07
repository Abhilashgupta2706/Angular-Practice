import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { StepperForm } from 'src/app/DTOS/StepperForm';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StepperFormDialogBoxComponent } from '../stepper-form-dialog-box/stepper-form-dialog-box.component';

@Component({
  selector: 'app-horizontal-stepper',
  templateUrl: './horizontal-stepper.component.html',
  styleUrls: ['./horizontal-stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {
      showError: true,
      displayDefaultIndicatorType: false
    }
  }]
})
export class HorizontalStepperComponent implements OnInit {
  selected = 'none';

  userForm: StepperForm = new StepperForm
  userInfoForm !: FormGroup

  userInformation!: string[]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formInit()
  }

  formInit() {
    this.userInfoForm = new FormGroup({
      'fname': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'lname': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'age': new FormControl('', [Validators.required, Validators.pattern('[0-9]{0,2}')]),
      'gender': new FormControl('', [Validators.required]),

      'address': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z]*")]),
      'state': new FormControl('', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z]*")]),
      'postalCode': new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),

      'emailID': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      'mobileNum': new FormControl('', [Validators.required, Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')]),

      'message': new FormControl('', [Validators.required])

      // 'fname': new FormControl('Abhilash', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      // 'lname': new FormControl('Gupta', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      // 'age': new FormControl('20', [Validators.required, Validators.pattern('[0-9]{0,2}')]),
      // 'gender': new FormControl('male', [Validators.required]),

      // 'address': new FormControl('603/2/5 Datta Mandir Road', [Validators.required]),
      // 'city': new FormControl('Pune or Pimpri Chinchwade', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z]*")]),
      // 'state': new FormControl('Maharashtra', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z]*")]),
      // 'postalCode': new FormControl('411033', [Validators.required, Validators.pattern("[0-9]*")]),

      // 'emailID': new FormControl('abhilashgupta@gmail.com', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      // 'mobileNum': new FormControl('+918669152500', [Validators.required, Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')]),

      // 'message': new FormControl('lorem', [Validators.required])
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(StepperFormDialogBoxComponent, {
      width: '60%',
      data: {
        'fname': this.userInformation[0],
        'lname': this.userInformation[1],
        'age': this.userInformation[2],
        'gender': this.userInformation[3],

        'address': this.userInformation[4],
        'city': this.userInformation[5],
        'state': this.userInformation[6],
        'postalCode': this.userInformation[7],

        'emailID': this.userInformation[8],
        'mobileNum': this.userInformation[9],

        'message': this.userInformation[10],
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit() {
    var fname = this.userInfoForm.value['fname']
    var lname = this.userInfoForm.value['lname']
    var age = this.userInfoForm.value['age']
    var gender = this.userInfoForm.value['gender']

    var address = this.userInfoForm.value['address']
    var city = this.userInfoForm.value['city']
    var state = this.userInfoForm.value['state']
    var postalCode = this.userInfoForm.value['postalCode']

    var emailID = this.userInfoForm.value['emailID']
    var mobileNum = this.userInfoForm.value['mobileNum']

    var message = this.userInfoForm.value['message']

    this.userInformation = [fname, lname, age, gender, address, city, state, postalCode, emailID, mobileNum, message]

    this.openDialog()

  }
}
