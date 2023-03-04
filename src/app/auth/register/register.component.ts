import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router:Router, private _RegisterService:RegisterService ,private _islogin:AuthService) {}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required,
      Validators.pattern(/^[a-zA-Z0-9*@%$#]*$/)]),
  })
  // HANDLE REGISTER 
  handelRegister(formInfo:FormGroup) {
    this.router.navigate(["/",])
    // this._RegisterService.addNewUser({id:0,...this.registerForm.value})
    this._RegisterService.addNewUser(this.registerForm.value)
this._islogin.changeLogStatus(true)
  }
}
