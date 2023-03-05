import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private router: Router,
    private log: AuthService,
    private _register: RegisterService,
    private _signInService: SignInService,
    private toastr: ToastrService
  ) {}
  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9*@%$#]*$/),
    ]),
  });
  // HANDLE REGISTER
  handelSignIn(): void {
    this._signInService.signIn(this.signInForm);
  }
  // ??????????????????
  routeToRegister(): void {
    this.router.navigate(['/register']);
  }
}
