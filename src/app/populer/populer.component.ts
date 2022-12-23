import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { GetProductsService } from '../services/get-products.service';
import { Products } from '../interfaces/products';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-populer',
  templateUrl: './populer.component.html',
  styleUrls: ['./populer.component.scss'],
})
export class PopulerComponent {
  productsData: Products[] = [];
  index: number = 0;
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
  constructor(
    private products: GetProductsService,
    private route: Router,
    private cart: CartService,
    private wishList: WishListService
  ) {}
  ngOnInit() {
    // get product data
    this.products.arrProducts.subscribe((val) => {
      this.productsData = val.slice(0, 11);
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
