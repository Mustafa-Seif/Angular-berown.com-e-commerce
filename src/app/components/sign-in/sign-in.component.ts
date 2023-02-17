import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private router:Router, private log:AuthService) {}
  registerForm: FormGroup = new FormGroup({
    
    email: new FormControl("",[Validators.required, Validators.email]),
   
    password: new FormControl("", [Validators.required,
      Validators.pattern(/^[a-zA-Z0-9*@%$#]*$/)]),
      
  })
  handelRegister(formInfo:FormGroup) {
    this.router.navigate(["/cart",])
    this.log.changeLogStatus(true)

  }
  // onSubmit(){
  //   console.log("first")
  // }
}
