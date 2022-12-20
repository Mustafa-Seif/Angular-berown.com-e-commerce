import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { GetProductsService } from '../services/get-products.service'
import { Products } from '../interfaces/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
   productsData:Products[]=[]
  constructor(private products:GetProductsService ,private route:Router){}
  ngOnInit(){
    this.products.arrProducts.subscribe((val)=>{
      this.productsData = val.slice(10,21);

    })
  }
  //  navigate to product details
  showDetails(e: Products) {
    this.route.navigate(['/product-details', e.id]);
  }
}
