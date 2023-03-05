import { Component, DoCheck } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [MessageService],
})
export class NavBarComponent implements DoCheck {
  theCartLength: number = 2;
  searchVal: string = '';
  logedAuth:boolean=false;

  constructor(
    private cart: CartService,
    private route: Router,
    private toastr: ToastrService,
    private islog:AuthService
  ) {}

  ngOnInit() {
    this.getCartLength()
    this.getLoginStatus()
  }
  // get cart length after change
  ngDoCheck() {
  //  this.getCartLength()
  }
  // get cart length
  getCartLength(){
    this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });
  }
  // get Login Status
  getLoginStatus(){
    this.islog.loged.subscribe((val)=>{
      this.logedAuth = val;
    })
  }
// HANDLE GO TO SEARCH 
  goToSearchResults(): void {
    if (this.searchVal && this.searchVal.trim().length) {
      this.route.navigate(['/search-results'],
      {queryParams:{pro:this.searchVal},queryParamsHandling: 'merge' }
      );
    }
  }
  authCart() {
    if (!this.logedAuth) {
      // OPEN TOAST IF NOT SIGNED IN
      this.toastr.info('Please sign-in first!');
      // NAVGATE TO SIGN IN IF NOT SIGNED IN
      this.route.navigate(['/sign-in'])
    }
  }
  // SIGN OUT
  signOut(){
    // CHANGE SIGN STATUS
    Swal.fire({
      text: 'Are you sure you want sign out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef6c00',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.islog.changeLogStatus(false)
        this.route.navigate(['/'])
      }
    })
  }





}
