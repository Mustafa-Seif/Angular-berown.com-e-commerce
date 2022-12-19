import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { GetProductsService } from '../services/get-products.service';
import { Products } from '../interfaces/products';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-populer',
  templateUrl: './populer.component.html',
  styleUrls: ['./populer.component.scss']
})
export class PopulerComponent {
   productsData:Products[]=[]
  constructor(private products:GetProductsService){}
  ngOnInit(){
    this.products.arrProducts.subscribe((val)=>{
      this.productsData = val;

    })
  }
  
  

}
