import { Component } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import validator from 'validator';

// import { NameValidator } from './name.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register: FormGroup;
  constructor() {
    this.register = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)]

      ),

      password: new FormControl('', [
         Validators.required,
        Validators.pattern('^((?=.*[A-Z])(?=.*d).{8,99})')

      ]),

      email: new FormControl('',
        Validators.required,



      ),
      Username: new FormControl('', [
        Validators.required,



      ])
    });
  }
  handleSubmitForm() {
    console.log(this.register);
  }
}
