import { Component } from '@angular/core';
import { GetProductsService } from '../services/get-products.service';
import { Products } from '../interfaces/products';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  productsData: Products[] = [];
  //  make swiper responsive
  swiperConfig: any = {
    slidesPerView: '2',
    spaceBetween: 20,
    breakpoints: {
      992: {
        spaceBetween: 20,
        slidesPerView: '5',
      },
    },
  };
  constructor(private products: GetProductsService, private route: Router, private cart:CartService , private wishList:WishListService) {}
  ngOnInit() {
    this.products.arrProducts.subscribe((val) => {
      this.productsData = val.slice(10, 21);
    });
  }
  //  navigate to product details
  showDetails(e: Products) {
    this.route.navigate(['/product-details', e.id]);
  }
   // add product to cart 
   addToCart(item:any){
    this.cart.addProductToCart(item)
  }
  // add product to wish-List 
  addToWish(item:Products):void{
    this.wishList.addToWishList(item)
    console.log("first")

  }
}
