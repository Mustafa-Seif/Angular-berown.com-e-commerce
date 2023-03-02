import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { WishListService } from '../../services/wish-list.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent {
  index: number = 0;
  wishList: Products[] = [];
  constructor(
    private wishListItems: WishListService,
    private cart: CartService
  ) {}
  ngOnInit() {
    // get wishList
    this.wishListItems.wishList.subscribe((val) => {
      this.wishList = val;
    });
  }
  // remove item from wish list
  removePro(index: number): void {
    this.wishListItems.removeFromWishes(index);
  }
  // add product to cart
  addToCart(item: any) {
    this.cart.addProductToCart(item);
  }
}
