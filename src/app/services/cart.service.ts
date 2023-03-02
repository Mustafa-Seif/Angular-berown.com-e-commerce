import { Injectable } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';
import { Products } from '../interfaces/products';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // CREATE asObservable
  private theCart = new BehaviorSubject<Products[]>([])
  cart = this.theCart.asObservable()
    constructor(private toastr: ToastrService) { }
  // ADD PRODUCT TO CART 
  addProductToCart(item:Products): void {
    this.theCart.subscribe((val)=>{
      if (val.find((test) => test.id === item.id) === undefined) {
        val.push(item)
        // ADD TOASTER 
    this.toastr.success('The product has been added to cart');
      }else{
        val.forEach((el)=>{
          if (el.id === item.id){
            el.count++;
             // ADD TOASTER 
             this.toastr.info('This product already exists at cart');
          }
        })
      }
    })
   }
  // REMOVE PRODUCT FROM CART 
  removeProduct(ind:number):void{
    this.theCart.subscribe((val)=>{
      val.splice(ind,1)
      this.toastr.warning('The product has been deleted from cart');
     })
  }
}
