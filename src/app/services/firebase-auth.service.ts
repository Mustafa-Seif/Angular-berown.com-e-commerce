import { Injectable, NgZone } from '@angular/core';
import { User } from '../interfaces/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  userData: any; // Save logged in user data
  constructor(
    private toastr: ToastrService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private _islogin: AuthService,
    private db: AngularFireDatabase
  ) {
    /* Saving user data in localstorage when 
      logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            // CHANGE AUTH SERVICE STATUS
            this._islogin.changeLogStatus(true);
            this.toastr.success('Welcome!');
            this.router.navigate(['/']);
          }
        });
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }
  // Sign up with email/password
  SignUp({ email, password, name, profileImg, phoneNum }: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        /* Call the SendVerificaitonMail() function when new user sign 
          up and returns promise */
        // this.SendVerificationMail();
        // this.SetUserData(result.user);
        // CHANGE AUTH SERVICE STATUS
        this._islogin.changeLogStatus(true);
        this.router.navigate(['/']);
        this.toastr.success('Welcome!');
        this.updateUserProfile(result, name, profileImg, phoneNum);
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['/']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.toastr.success('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user;
    // return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider())
      .then((res: any) => {
        // CHANGE AUTH SERVICE STATUS
        this._islogin.changeLogStatus(true);
      })
      .then(() => {
        this.router.navigate(['/']);
        this.toastr.success('Welcome!');
      });
  }

  // Sign in with facebook
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider())
      .then((res: any) => {
        // CHANGE AUTH SERVICE STATUS
        this._islogin.changeLogStatus(true);
      })
      .then(() => {
        this.router.navigate(['/']);
        this.toastr.success('Welcome!');
      });
  }

  // Sign in with facebook
  TwitterAuth() {
    return this.AuthLogin(new auth.TwitterAuthProvider())
      .then((res: any) => {
        // CHANGE AUTH SERVICE STATUS
        this._islogin.changeLogStatus(true);
      })
      .then(() => {
        this.router.navigate(['/']);
        this.toastr.success('Welcome!');
      });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['/']);
        // this.SetUserData(result.user);
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }
  /* Setting up user data when sign in with username/password, 
    sign up with username/password and sign in with social auth  
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  //  SetUserData(user: any) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${user.uid}`
  //   );
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: 'user.displayName',
  //     photoURL: 'user.photoURL',
  //     emailVerified: user.emailVerified,
  //   };
  //   return await userRef.set(userData, {
  //     merge: true,
  //   });
  // }

  // Update the user's profile
  updateUserProfile(
    result: any,
    displayName: string,
    profileImg: string,
    phoneNum: any
  ) {
    return result.user.updateProfile({
      displayName: displayName,
      photoURL: profileImg,
      phoneNumber: phoneNum,
    });
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
      // CHANGE AUTH SERVICE STATUS
      this._islogin.changeLogStatus(false);
      this.toastr.info('Sign out!');
    });
  }

  // Add a new cart to the cloud store
  AddCart(cart: any) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        return this.afs.collection(`users/${user.uid}/carts`).add(cart);
      }else{
        return null
      }
    });
  }

  // Get all carts for a user from the cloud store
  get GetCarts() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        return this.afs.collection(`users/${user.uid}/carts`).valueChanges();
      }else{
        return null
      }
    });
    return null
  }

  // Update an existing cart in the cloud store
  updateCart(cartId: string, cart: any) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        return this.afs.doc(`users/${user.uid}/carts/${cartId}`).update(cart);
      }else{
        return null
      }
    });
  }

  // Delete a cart from the cloud store
  deleteCart(cartId: string) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        return this.afs.doc(`users/${user.uid}/carts/${cartId}`).delete();
      }else{
        return null
      }
    });
  }
}
