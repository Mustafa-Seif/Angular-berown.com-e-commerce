import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { GetProductsService } from '../../services/get-products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { WishListService } from '../../services/wish-list.service';


@Component({
  selector: 'app-search-resulte',
  templateUrl: './search-resulte.component.html',
  styleUrls: ['./search-resulte.component.scss'],
  providers: [],
})
export class SearchResulteComponent {
  productsFilters: Products[] = [];
  searchVal: any;
  grid: string = 'col-md-3 col-6';

  constructor(
    private productsList: GetProductsService,
    private routeActive: ActivatedRoute,
    private route: Router,
    private cart: CartService,
    private wishList: WishListService,
  ) {}
  ngOnInit() {
    this.getProducts();
  }

  ngDoCheck() {
    // this.getProducts();
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
