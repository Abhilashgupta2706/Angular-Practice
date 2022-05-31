import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})


export class FormValidationComponent implements OnInit {

  constructor() { }

  registrationForm: any;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      'Mobilenumber': new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')])
    })
  }
  onSubmit() {
    const values = this.registrationForm.value
    alert(`Thank you ${values.name} - ${values.email} - ${values.Mobilenumber}`)
    this.registrationForm.reset()
  }

  get name() { return this.registrationForm.get('name') }
  get email() { return this.registrationForm.get('email') }
  get Mobilenumber() { return this.registrationForm.get('Mobilenumber') }

}
