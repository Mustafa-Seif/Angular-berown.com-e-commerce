
////////// M O D U L E S  ////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

////////// C O M P O N E N T S  ////////////
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountComponent } from './account/account.component';
import { SocialAuthComponent } from './social-auth/social-auth.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent,
    AccountComponent,
    SocialAuthComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AuthRoutingModule,
    ReactiveFormsModule,

  ],
  exports:[
    RegisterComponent,
    SignInComponent,
    AccountComponent,
    SocialAuthComponent
  ]
})
export class AuthModule { }
