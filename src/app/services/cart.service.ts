import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../interfaces/products';
import { ToastrService } from 'ngx-toastr';
import { FirebaseAuthService } from './firebase-auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // CREATE asObservable
  private theCart = new BehaviorSubject<Products[]>([]);
  cart = this.theCart.asObservable();
  constructor(private toastr: ToastrService, private fs:FirebaseAuthService) {
   // LOCALSTORAG
    this.theCart.next(JSON.parse(localStorage.getItem('cartStorage') || '[]'));
  }
  // ADD PRODUCT TO CART
  addProductToCart(item: Products): void {
    this.theCart.subscribe((val) => {
      if (val.find((test) => test.id === item.id) === undefined) {
        val.push(item);
        // LOCALSTORAGE
        localStorage.setItem('cartStorage', JSON.stringify(val));
        // ADD TOASTER
        this.toastr.success('The product has been added to cart');
      } else {
        val.forEach((el) => {
          if (el.id === item.id) {
            el.count++;
            // ADD TOASTER
            this.toastr.info('This product already exists at cart');
            // LOCALSTORAGE
            localStorage.setItem('cartStorage', JSON.stringify(val));
          }
        });
      }
    }).unsubscribe();
    this.theCart.next(this.theCart.value)

    this.fs.AddCart(this.theCart.value)
  }
  // REMOVE PRODUCT FROM CART
  removeProduct(ind: number): void {
    this.theCart.subscribe((val) => {
      val.splice(ind, 1);
      // LOCALSTORAGE
      localStorage.setItem('cartStorage', JSON.stringify(val));
      this.toastr.warning('The product has been deleted from cart');
    }).unsubscribe();
    this.theCart.next(this.theCart.value)
  }
}
