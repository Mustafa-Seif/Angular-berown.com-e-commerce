import { Component } from '@angular/core';
import { GetProductsService } from '../../services/get-products.service';
import { Products } from '../../interfaces/products';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { WishListService } from '../../services/wish-list.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  providers: [],

})
export class FeatureComponent {
  productsData: Products[] = [];
  Isloading:boolean=true;
  sekletonHeight:any={one:200,tow:50,three:20}

  //  make swiper responsive
  swiperConfig: any = {
    slidesPerView: '1',
    spaceBetween: 20,
    breakpoints: {
      992: {
        spaceBetween: 20,
        slidesPerView: '5',
      },
    },
  };
  constructor(
    private products: GetProductsService,
    private route: Router,
    private cart: CartService,
    private wishList: WishListService,
    private _Isloader:LoaderService

  ) {}
  ngOnInit() {
    this.checkLoader()
    this.getProData()
  }
   // CHECK LOADER STATUS 
   checkLoader(){
    this._Isloader._isloader.subscribe((val)=>{
      this.Isloading = val
    })
  }
  getProData(){
     this.products.getProData().subscribe((val) => {
      this.productsData = val.slice(10, 21);
    });
  }
  //  navigate to product details
  showDetails(e: Products) {
    this.route.navigate(['/product-details', e.id]);
  }
  // add product to cart
  addToCart(item: any) {
    this.cart.addProductToCart(item);
  }
  // add product to wish-List
  addToWish(item: Products): void {
    this.wishList.addToWishList(item);
    console.log('first');
  }

}
