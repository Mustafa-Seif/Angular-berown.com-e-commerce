import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  userData: any;
  constructor(private fireAuth: FirebaseAuthService) {}
  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.userData = this.fireAuth.isLoggedIn;
  }
}
