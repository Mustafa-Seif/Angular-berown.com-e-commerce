import { Component, DoCheck } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements DoCheck {
  theCartLength: number = 2;
  constructor(private cart: CartService) {}

  ngOnInit() {
    // get cart length
    this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });
    console.log(this.theCartLength);
  }
  // get cart length after change
  ngDoCheck() {
    this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });
  }
}
