import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  userData: any;
  constructor(
    private fireAuth: FirebaseAuthService,
    public afAuth: AngularFireAuth
  ) {}
  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.afAuth.authState.subscribe((user: any) => {
      if (user) {
        this.userData = user;
        console.log('User data:', this.userData);
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });
  }
}
