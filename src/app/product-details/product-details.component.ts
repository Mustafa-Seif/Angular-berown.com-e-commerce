import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from '../services/get-products.service';
import { Products } from '../interfaces/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  id?: number;
  productsDetails: Products[] = [];

  constructor(private products: GetProductsService,private route: ActivatedRoute, private cart:CartService) {}
  ngOnInit() {
    // get pramas id 
  this.id = this.route.snapshot.params['id'];
  // get product details 
  this.products.arrProducts.subscribe((val) => {
    this.productsDetails = val.filter((el)=>{
      return el.id == this.id
    });
  });
  }
  // add product to cart 
  addToCart(item:any){
    this.cart.addProductToCart(item)
  }
}
