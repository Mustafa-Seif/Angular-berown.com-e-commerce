import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { GetProductsService } from '../../services/get-products.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { WishListService } from '../../services/wish-list.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-search-resulte',
  templateUrl: './search-resulte.component.html',
  styleUrls: ['./search-resulte.component.scss'],
  providers: [],
})
export class SearchResulteComponent {
  productsFilters: Products[] = [];
  searchVal?: any;
  grid: string = 'col-md-3 col-6';
  Isloading:boolean=true;
  sekletonHeight:any={one:275,tow:75,three:25}

  constructor(
    private productsList: GetProductsService,
    private routeActive: ActivatedRoute,
    private route: Router,
    private cart: CartService,
    private wishList: WishListService,
    private _Isloader:LoaderService

  ) {
    this.route.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.getProducts();
      }
    });
  }
  ngOnInit() {
    this.getProducts();
    this.checkLoader()
  }
  // CHECK LOADER STATUS 
  checkLoader(){
    this._Isloader._isloader.subscribe((val)=>{
      this.Isloading = val
    })
  }

  // GET SEARCH VALUE FROM QUERY PARAMS
  getSearchVal() {
    this.routeActive.queryParams.subscribe((val) => {
      this.searchVal = val;
    });
  }
  // Get product by search Value
  getProducts() {
    this.getSearchVal();
    this.productsList.getProData().subscribe((val) => {
      this.productsFilters = val.filter((el) => {
        return el.description
          .toLowerCase()
          .includes(this.searchVal.pro?.toLowerCase());
      });
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

  ////// handle grid ///////
  handleCol12() {
    this.grid = 'col-md-4 col-12';
  }
  handleCol6() {
    this.grid = 'col-md-3 col-6';
  }
  handleCol3() {
    this.grid = 'col-md-2 col-6';
  }
}
