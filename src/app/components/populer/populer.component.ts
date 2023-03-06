import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { GetProductsService } from '../../services/get-products.service';
import { Products } from '../../interfaces/products';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { WishListService } from '../../services/wish-list.service';
import { LoaderService } from 'src/app/services/loader.service';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-populer',
  templateUrl: './populer.component.html',
  styleUrls: ['./populer.component.scss'],
  providers: [],
})
export class PopulerComponent {
  productsData: Products[] = [];
  index: number = 0;
  Isloading:boolean=true;

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
    this. getProData()
  }
  // CHECK LOADER STATUS 
  checkLoader(){
    this._Isloader._isloader.subscribe((val)=>{
      this.Isloading = val
    })
  } 
  // get product data
  getProData(){
    this.products.getProData().subscribe((val) => {
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
  }
}
