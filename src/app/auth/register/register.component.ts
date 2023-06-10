import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {

  Router,

} from '@angular/router';
import { Observable } from 'rxjs';

import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  _IsRegister: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private fireAuth: FirebaseAuthService,
    private router: Router
  ) {}
  ngOnInit() {
    console.log(this.registerForm.dirty);
  }

  registerForm = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNum: [
        '',
        [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(10),
        ],
      ],
      profileImg: ['', []],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(6),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(6),
        ],
      ],
    },
    {
      validators: this.confirmPasswordValidator('password', 'confirmPassword'),
    }
  );

  //  MATCH PASSWORD FUN
  confirmPasswordValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordsDoNotMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  // HANDLE REGISTER
  handelRegister(uData: any) {
    this._IsRegister = true;
    // SEND NEW USER TO FIREBASE
    this.fireAuth.SignUp(this.registerForm.value);
  }

  canDeactivateMethod(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._IsRegister && this.registerForm.dirty) {
      let confirmMass = confirm('Are you sure you want leave page?');
      if (confirmMass) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}

