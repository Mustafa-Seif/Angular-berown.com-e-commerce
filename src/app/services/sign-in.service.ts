import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(
    private _register: RegisterService,
    private router: Router,
    private log: AuthService,
    private toastr: ToastrService
  ) {}
  signIn(form: FormGroup): void {
    this._register.register.subscribe((val) => {
      if (
        val.find((user) => user.email === form.value.email) === undefined ||
        val.find((user) => user.password === form.value.password) === undefined
      ) {
        this.toastr.warning('e-mail or password incorrect!');
      } else if (
        val.find((user) => user.email === form.value.email) &&
        val.find((user) => user.password === form.value.password)
      ) {
        this.log.changeLogStatus(true);
        this.router.navigate(['/cart']);
        // ADD TOASTER
        this.toastr.success('welcome');
      }
    });
  }
}
