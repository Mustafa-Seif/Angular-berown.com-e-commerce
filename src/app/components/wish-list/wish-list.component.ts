import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { WishListService } from '../../services/wish-list.service';
import { CartService } from '../../services/cart.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent {
  index: number = 0;
  wishList: Products[] = [];  
  sekletonHeight:any={one:100,tow:20,three:0}
  Isloading:boolean=true;
  constructor(
    private wishListItems: WishListService,
    private cart: CartService,
    private _Isloader:LoaderService
  ) {}
  ngOnInit() {
    // get wishList
    this.wishListItems.wishList.subscribe((val) => {
      this.wishList = val;
    });
    
    this.checkLoader()
  }
  // CHECK LOADER STATUS 
  checkLoader(){
    this._Isloader._isloader.subscribe((val)=>{
      this.Isloading = val
    })
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
