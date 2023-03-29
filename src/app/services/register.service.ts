import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RegisterUser } from '../interfaces/register-user';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerList = new BehaviorSubject<RegisterUser[]>([]);
  register = this.registerList.asObservable();
    constructor(private toastr: ToastrService, private _router: Router ,private _islogin: AuthService ) {
    this.registerList.next(
      JSON.parse(localStorage.getItem('userStorage') || '[]')
    );
  }
  addNewUser(newUser: RegisterUser):void {
    this.registerList.subscribe((val) => {
      if (val.find((user) => user.email === newUser.email) === undefined) {
        val.push(newUser);
        // ROUTE TO HOME AFTER REGISTER
        this._router.navigate(['/']);
        // CHANGE AUTH STATUS AFTER REGISTER
        this._islogin.changeLogStatus(true);
        // LOCALSTORAGE
        localStorage.setItem('userStorage', JSON.stringify(val));
        // ADD TOASTER
        this.toastr.success('Welcome');
      } else {
        val.forEach((el) => {
          if (el.email === newUser.email) {
            // ADD TOASTER
            this.toastr.error('This user already exists');
            // LOCALSTORAGE
            localStorage.setItem('userStorage', JSON.stringify(val));
          }
        });
      }
    });
  }
}
