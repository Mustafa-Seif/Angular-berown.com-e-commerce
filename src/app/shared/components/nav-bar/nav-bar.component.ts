import { Component, DoCheck } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [MessageService],
})
export class NavBarComponent {
  theCartLength: number = 2;
  searchVal: string = '';
  logedAuth: boolean = false;
  uData: any;
  total:number = 0;

private cartSubscription? : Subscription
private authSubscription? : Subscription
private fsAuthSubscription? : Subscription
private totalSubscription? : Subscription

  constructor(
    private cart: CartService,
    private route: Router,
    private toastr: ToastrService,
    private _isloged: AuthService,
    private firebase: FirebaseAuthService,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.getCartLength();
    this.getLoginStatus();
    this.getUData();
    this.cart.getTotal()
    this.getTotal()
  }
  // get cart length
  getCartLength() {
    this.cartSubscription = this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });
  }
  // get Login Status
  getLoginStatus() {
    this.authSubscription = this._isloged.loged.subscribe((val) => {
      this.logedAuth = val;
    });
  }
  // HANDLE GO TO SEARCH
  goToSearchResults(): void {
    if (this.searchVal && this.searchVal.trim().length) {
      this.route.navigate(['/search-results'], {
        queryParams: { pro: this.searchVal },
        queryParamsHandling: 'merge',
      });
    }
  }
  // check Auth Status
  checkAuthStatus(): void {
    if (!this.logedAuth) {
      // OPEN TOAST IF NOT SIGNED IN
      this.toastr.info('Please sign-in first!');
      // NAVGATE TO SIGN IN IF NOT SIGNED IN
      this.route.navigate(['/sign-in']);
    }
  }
// GET USER DATA 
  getUData(): void {
    this.fsAuthSubscription = this.afAuth.authState.subscribe((user: any) => {
      if (user) {
        this.uData = user;
      } else {
        this.uData = 'My Account';
      }
    });
  }
  getTotal(){
      this.cart.total$.subscribe(val=> this.total = val)
  }
  // SIGN OUT
  signOut(): void {
    Swal.fire({
      text: 'Are you sure you want sign out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef6c00',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        // SIGNOUT FROM FIREBASE
        this.firebase.SignOut();
        this._isloged.changeLogStatus(false);
        this.route.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
     this.cartSubscription?.unsubscribe()
     this.authSubscription?.unsubscribe()
     this.fsAuthSubscription?.unsubscribe()
     this.totalSubscription?.unsubscribe()
    
  }
}
