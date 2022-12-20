import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private theCart = new BehaviorSubject([])
  cart = this.theCart.asObservable()

  constructor() { }
   
  
  addProductToCart(item:any): void {
   this.theCart.next(item)
  
  }
}
