import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RegisterUser } from '../interfaces/register-user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerList =  new BehaviorSubject<RegisterUser[]>([]);
  register = this.registerList.asObservable()
  
  constructor(private toastr: ToastrService) { 
    this.registerList.next(JSON.parse(localStorage.getItem('userStorage') || '[]'));
  }
  addNewUser(newUser:RegisterUser){
    this.registerList.subscribe((val) => {
      if (val.find((user) => user.email === newUser.email) === undefined ) {
        val.push(newUser);
        // LOCALSTORAGE
        localStorage.setItem('userStorage', JSON.stringify(val));
        // ADD TOASTER
        this.toastr.success('Welcome');
      } else {
        val.forEach((el) => {
          if (el.email === newUser.email) {
            // ADD TOASTER
            this.toastr.info('This user already exists');
            // LOCALSTORAGE
            localStorage.setItem('userStorage', JSON.stringify(val));
          }
        });
      }
    });
  }
}
