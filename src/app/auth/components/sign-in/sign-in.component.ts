import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private router: Router, private fireAuth: FirebaseAuthService) {}
  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9*@%$#]*$/),
    ]),
  });
  // HANDLE SIGNIN
  handelSignIn(): void {
    const { email, password } = this.signInForm.value;
    // CHECK  USER TO FIREBASE AFTER SIGNIN
    this.fireAuth.SignIn(email, password);
      this.fireAuth.isLoggedIn
      
  }
  // RESET PASSWORD FROM FIREBASE
  resetPassword() {
    const { email } = this.signInForm.value;
    this.fireAuth.ForgotPassword(email);
  }
}
