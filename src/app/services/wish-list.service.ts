import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../interfaces/products';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  private theWishes = new BehaviorSubject<Products[]>([])
  wishList = this.theWishes.asObservable()
  constructor(private toastr: ToastrService) { }

  addToWishList(item:Products):void{
    this.theWishes.subscribe((val)=>{
      if (val.find((test) => test.id === item.id) === undefined) {
        val.push(item)
        // ADD TOASTER 
    this.toastr.success('The product has been added to wish list');
      }else{
        val.forEach((el)=>{
          if (el.id === item.id){
            el.count++;
             // ADD TOASTER 
             this.toastr.info('This product already exists at wish list');
          }
        })
      }
    })
  }
  removeFromWishes(index:number){
    this.wishList.subscribe((val)=>{
      val.splice(index,1)
      this.toastr.warning('The product has been deleted from wish list');

     })
  }
}
