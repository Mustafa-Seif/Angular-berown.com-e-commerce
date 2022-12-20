import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { GetProductsService } from '../services/get-products.service';
import { Products } from '../interfaces/products';
import { Router } from '@angular/router';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-populer',
  templateUrl: './populer.component.html',
  styleUrls: ['./populer.component.scss'],
})
export class PopulerComponent {
  productsData: Products[] = [];
  constructor(private products: GetProductsService, private route: Router) {}
  ngOnInit() {
  // get product data
    this.products.arrProducts.subscribe((val) => {
      this.productsData = val.slice(0, 11);
    });
  }
  //  navigate to product details
  showDetails(e: Products) {
    this.route.navigate(['/product-details',e.id]);
  }
}
