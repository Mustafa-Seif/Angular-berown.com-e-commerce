import { Component } from '@angular/core';
import { Products } from '../interfaces/products';
import { GetProductsService } from '../services/get-products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-search-resulte',
  templateUrl: './search-resulte.component.html',
  styleUrls: ['./search-resulte.component.scss'],
})
export class SearchResulteComponent {
  productsFilters: Products[] = [];
  searchVal: string = '';
  constructor(
    private productsList: GetProductsService,
    private routeActive: ActivatedRoute,
    private route: Router,
    private cart: CartService,
    private wishList: WishListService
  ) {}
  ngOnInit() {
    // Get product by search Value
    this.searchVal = this.routeActive.snapshot.params['val'];
    this.productsList.arrProducts.subscribe((val) => {
      this.productsFilters = val.filter((el) => {
        return el.title.toLowerCase().includes(this.searchVal.toLowerCase());
      });
    });
  }

  ngDoCheck(){
      // Get product by search Value
    this.searchVal = this.routeActive.snapshot.params['val'];
    this.productsList.arrProducts.subscribe((val) => {
      this.productsFilters = val.filter((el) => {
        return el.title.toLowerCase().includes(this.searchVal.toLowerCase());
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
}
