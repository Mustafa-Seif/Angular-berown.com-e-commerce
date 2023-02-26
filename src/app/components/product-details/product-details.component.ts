import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from '../../services/get-products.service';
import { Products } from '../../interfaces/products';
import { CartService } from '../../services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [MessageService],
})
export class ProductDetailsComponent {
  id?: number;
  productsDetails: Products[] = [];

  constructor(
    private products: GetProductsService,
    private route: ActivatedRoute,
    private cart: CartService,
    private messageService: MessageService,

  ) {}
  ngOnInit() {
    // get pramas id
    this.id = this.route.snapshot.params['id'];
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
//  add toast 
  showToastCart() {
    this.messageService.add({
      key: 'addToCart',
      severity: 'success',
      summary: 'Cart',
      detail: 'The product has been added to cart',
    });
  }
  showToastWish() {
    this.messageService.add({
      key: 'addToWish',
      severity: 'success',
      summary: 'Wish list',
      detail: 'The product has been added to wish list',
    });
  }
}
