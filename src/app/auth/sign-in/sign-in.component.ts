import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) {}
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9*@%$#]*$/),
    ]),
  });
  // HANDLE REGISTER
  handelRegister(formInfo: FormGroup) {
    this._register.register.subscribe((val) => {
      if (
        val.find((user) => user.email === this.registerForm.value.email) ===
          undefined &&
        val.find(
          (user) => user.password === this.registerForm.value.password
        ) === undefined
      ) {
        // this.log.changeLogStatus(false);

        this.toastr.info('Not found');
      } else if (
        val.find((user) => user.email === this.registerForm.value.email) &&
        val.find((user) => user.password === this.registerForm.value.password)
      ) {
        // val.forEach((el) => {
        // if (el.email === this.registerForm.value.id) {
        this.log.changeLogStatus(true);
        this.router.navigate(['/cart']);

        // ADD TOASTER
        this.toastr.success('welcome');

        // }
        // });
      }
    });

    // this.router.navigate(["/cart",])
    // this.log.changeLogStatus(true)
  }

  // ??????????????????
  routeToRegister() {
    this.router.navigate(['/register']);
  }
}
