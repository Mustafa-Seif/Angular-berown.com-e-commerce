import { Component } from '@angular/core';
import { GetProductsService } from '../services/get-products.service';
import { Products } from '../interfaces/products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hot-offer',
  templateUrl: './hot-offer.component.html',
  styleUrls: ['./hot-offer.component.scss']
})
export class HotOfferComponent {
  proSlice1Item:Products[]=[];
  proSlice2Item:Products[]=[];
  proSlice3Item:Products[]=[];
  constructor(private products: GetProductsService,private route:Router){}
  ngOnInit(){
    this.products.arrProducts.subscribe((val)=>{
      this.proSlice1Item = val.slice(0,3)
    })
    this.products.arrProducts.subscribe((val)=>{
      this.proSlice2Item = val.slice(3,6)
    })
    this.products.arrProducts.subscribe((val)=>{
      this.proSlice3Item = val.slice(6,9)
    })
  }
  
  addToCart(id:number){
    this.route.navigate(['/product-details',id]);
  }
}