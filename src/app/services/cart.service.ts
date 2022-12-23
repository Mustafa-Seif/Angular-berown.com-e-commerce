import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private theCart = new BehaviorSubject<Products[]>([])
  cart = this.theCart.asObservable()

  constructor() { }
   
  
  addProductToCart(item:Products): void {
   this.theCart.subscribe((val)=>{
    val.push(item)
   })
  }
  removeProduct(ind:number):void{
    this.theCart.subscribe((val)=>{
      val.splice(ind,1)
     })
  }
  // getLengthOfCart(){
  //   this.theCart.subscribe((val)=>{
  //     return val.length
  //   })
  // }
}
