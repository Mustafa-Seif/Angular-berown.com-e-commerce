import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.scss']
})
export class SocialAuthComponent {
  constructor(
    private fireAuth:FirebaseAuthService
  ) {}
// HANDLE AUTH GOOGLE 
  googleAuth(){
    this.fireAuth.GoogleAuth()
  }
  
}
