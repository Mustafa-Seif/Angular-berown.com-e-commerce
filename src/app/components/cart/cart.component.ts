import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [],
})
export class CartComponent {
  arrCart: Products[] = [];
  index: number = 0;
  total: number = 0;

  constructor(private cart: CartService) {}
  ngOnInit() {
    this.getPro();
  }
  // GET PRO FORM CART SERVICE
  getPro() {
    this.cart.cart.subscribe((val) => {
      this.arrCart = val;
      this.getTotal();
    });
  }
  // delete pro from cart
  removePro(index: number): void {
    this.cart.removeProduct(index);
    this.total = 0;
    // get products from cart  after delete pro
    this.cart.cart.subscribe((val) => {
      this.arrCart = val;
    });
    this.getTotal();
  }
  increasecount(id: number) {
    this.arrCart = this.arrCart.map((pro) => {
      if (pro.id == id) {
        this.total += +pro.price;
        pro.count++;
        this.total = 0;
        this.getTotal();
      }
      return pro;
    });
  }
  decreasecount(id: number) {
    this.arrCart = this.arrCart.map((pro) => {
      if (pro.id == id) {
        if (pro.count > 1) {
          pro.count--;
          this.total = 0;
          this.getTotal();
        }
      }
      return pro;
    });
  }
  getTotal() {
    for (let i = 0; i < this.arrCart.length; i++) {
      this.total += +this.arrCart[i].price * this.arrCart[i].count;
    }
  }
}
