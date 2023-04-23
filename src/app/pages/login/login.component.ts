import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private readonly fb: FormBuilder,) {
  }
  LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
  });
  hide = true;
  get emailInput() {
    return this.LoginForm.get('email');
  }
  get passwordInput() {
    return this.LoginForm.get('password');
  }
}
