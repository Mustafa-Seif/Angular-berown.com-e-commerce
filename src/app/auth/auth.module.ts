
////////// M O D U L E S  ////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
////////// C O M P O N E N T S  ////////////
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports:[
    RegisterComponent,
    SignInComponent,
    AccountComponent
  ]
})
export class AuthModule { }
