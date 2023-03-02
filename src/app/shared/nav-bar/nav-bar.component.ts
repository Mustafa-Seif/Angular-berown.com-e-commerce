import { Component, DoCheck } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

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
    // get cart length
    this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });

    this.islog.loged.subscribe((val)=>{
      this.logedAuth = val;
    })
  }
  // get cart length after change
  ngDoCheck() {
    this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });
  }
// HANDLE GO TO SEARCH 
  goToSearchResults(): void {
    if (this.searchVal && this.searchVal.trim().length !== 0) {
      this.route.navigate(['/search-results'],
      {queryParams:{pro:this.searchVal},queryParamsHandling: 'merge' }
      );
      this.searchVal = '';
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
    

  
}
