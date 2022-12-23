import { Component, DoCheck } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements DoCheck {
  theCartLength: number = 2;
  searchVal: string = '';
  constructor(private cart: CartService, private route: Router) {}

  ngOnInit() {
    // get cart length
    this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });
  }
  // get cart length after change
  ngDoCheck() {
    this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });
  }

  goToSearchResults():void {
    // this.route.navigate(["search-results", "1"]);
    this.route.navigate(['/search-results', this.searchVal])
    
  }
}
