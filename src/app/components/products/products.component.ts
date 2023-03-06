import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { GetProductsService } from '../../services/get-products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { WishListService } from '../../services/wish-list.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [],
})
export class ProductsComponent {
  products: Products[] = [];
  searchVal: string = '';
  grid:string='col-md-3 col-6';
  p: number = 1;
  Isloading:boolean=true;
  sekletonHeight:any={one:275,tow:75,three:25}

  constructor(
    private productsList: GetProductsService,
    private routeActive: ActivatedRoute,
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
    this.searchVal = this.routeActive.snapshot.params['val'];
    this.productsList.getProData().subscribe((val) => {
      this.products = val;
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

  ///// handle grid ///////
  handleCol12(){
    this.grid ="col-md-4 col-12"
  }
  handleCol6(){
    this.grid ="col-md-3 col-6"

  }
  handleCol3(){
    this.grid ="col-md-2 col-6"

  }
}
