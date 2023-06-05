import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetProductsService } from '../../services/get-products.service';
import { Products } from '../../interfaces/products';
import { CartService } from '../../services/cart.service';
import { WishListService } from '../../services/wish-list.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [],
})
export class ProductDetailsComponent {
  id?: number;
  productsDetails: Products[] = [];
  relatedPro: Products[] = [];
  myThumbnail = 'https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg';
  myFullresImage ='https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg';
  sekletonHeightRelted:any={one:200,tow:50,three:20}
  sekletonHeightDetails:any={one:300,tow:75,three:50}
  sekletonHeightDetails1:any={one:400,tow:0,three:0}
  Isloading:boolean=true;
    
  constructor(
    private products: GetProductsService,
    private route: ActivatedRoute,
    private cart: CartService,
    private wishList: WishListService,
    private router: Router,
    private _Isloader:LoaderService

  ) {}
  ngOnInit() {
    this.getProDetails();
    this.getRelatedPro();
    this.checkLoader()
  }
  // CHECK LOADER STATUS 
  checkLoader(){
    this._Isloader._isloader.subscribe((val)=>{
      this.Isloading = val
    })
  } 
  // get related product 
  getRelatedPro(){
    this.products.getProData().subscribe((val) => {
      this.relatedPro = val.filter((el) => {
        return el.title == this.productsDetails[0].title;
      });
    });
  }
  // get product details
  getProDetails() {
    // get pramas id
     this.route.params.subscribe((params:Params)=>{
this.id = params['id']
    })
    // get product details
    this.products.getProData().subscribe((val) => {
      this.productsDetails = val.filter((el) => {
        return el.id == this.id;
      });
    });
  }
  // add product to cart
  addToCart(item: any) {
    this.cart.addProductToCart(item);
  }
  // swiperConfig
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
  // Show Details
  showDetails(e: Products) {
    this.router.navigate(['/product-details', e.id]);
    this.getProDetails();
  }
  // add product to wish-List
  addToWish(item: Products): void {
    this.wishList.addToWishList(item);
  }
}
