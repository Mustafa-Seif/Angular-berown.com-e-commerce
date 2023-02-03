import { Injectable } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // CREATE asObservable
  private theCart = new BehaviorSubject<Products[]>([])
  cart = this.theCart.asObservable()

  constructor() { }
  // ADD PRODUCT TO CART 
  addProductToCart(item:Products): void {
    this.theCart.subscribe((val)=>{
      if (val.find((test) => test.id === item.id) === undefined) {
        val.push(item)
      }else{
        val.forEach((el)=>{
          if (el.id === item.id){
            el.count++;
          }
        })
      }
    })
   }
  // REMOVE PRODUCT FROM CART 
  removeProduct(ind:number):void{
    this.theCart.subscribe((val)=>{
      val.splice(ind,1)
      console.log(this.theCart.value)
     })
  }
}
