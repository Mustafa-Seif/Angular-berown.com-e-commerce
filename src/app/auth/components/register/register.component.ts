import { Component } from '@angular/core';
import { FormGroup, Validators , FormBuilder} from '@angular/forms';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private formBuilder:FormBuilder,
    private fireAuth:FirebaseAuthService
  ) {}
  registerForm = this.formBuilder.group({
    name:[ '', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    phoneNum:['', [
      Validators.required,
      Validators.maxLength(14),
      Validators.minLength(10) 
    ]],
    profileImg:['',[]],
    password:['', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(6) 
    ]],
    confirmPassword:['',[Validators.required,Validators.maxLength(10),
      Validators.minLength(6)]]
  },{
    validators: this.confirmPasswordValidator('password', 'confirmPassword')
  });

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
  handelRegister(uData:any) {
    console.log(this.registerForm.value)
    // SEND NEW USER TO FIREBASE 
    this.fireAuth.SignUp(this.registerForm.value)
  }
}
