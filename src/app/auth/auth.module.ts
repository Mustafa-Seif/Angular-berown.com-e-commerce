
////////// M O D U L E S  ////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

////////// C O M P O N E N T S  ////////////
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AccountComponent } from './components/account/account.component';
import { SocialAuthComponent } from './components/social-auth/social-auth.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent,
    AccountComponent,
    SocialAuthComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,

  ],
  exports:[
    RegisterComponent,
    SignInComponent,
    AccountComponent,
    SocialAuthComponent,
    AuthRoutingModule,

  ]
})
export class AuthModule { }
