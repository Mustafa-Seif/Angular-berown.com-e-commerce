import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../interfaces/products';
@Injectable({
  providedIn: 'root'
})
export class WishListService {
  private theWishes = new BehaviorSubject<Products[]>([])
  wishList = this.theWishes.asObservable()
  constructor() { }

  addToWishList(item:Products):void{
    this.theWishes.subscribe((val)=>{
      val.push(item)
    })
  }
  removeFromWishes(index:number){
    this.wishList.subscribe((val)=>{
      val.splice(index,1)
     })
  }
}
