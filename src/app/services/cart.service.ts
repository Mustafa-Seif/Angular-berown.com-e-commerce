import { Injectable } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private theCart = new BehaviorSubject<Products[]>([])
  cart = this.theCart.asObservable()

  constructor() { }
   
  
  // addProductToCart(item:Products): void {
  //  this.theCart.subscribe((val)=>{
  //   val.push(item)
  //  })
  // }

  addProductToCart(item:Products): void {
    this.theCart.subscribe((val)=>{
      val.push(item)
     val.map((el)=>{
      if (el.id == item.id) {
        console.log("duplected")
      }else{
        console.log("first time")
      }
     })
    })
   }

  removeProduct(ind:number):void{
    this.theCart.subscribe((val)=>{
      val.splice(ind,1)
      console.log(this.theCart.value)
     })
  }
}
