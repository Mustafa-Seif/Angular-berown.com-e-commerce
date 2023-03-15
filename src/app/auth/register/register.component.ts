import { Component } from '@angular/core';
import { FormGroup, Validators , FormBuilder} from '@angular/forms';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private _RegisterService: RegisterService,
    private formBuilder:FormBuilder
  ) {}
  registerForm = this.formBuilder.group({
    name:[ '', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
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
  handelRegister() {
    this._RegisterService.addNewUser(this.registerForm.value);
  }
  
}
