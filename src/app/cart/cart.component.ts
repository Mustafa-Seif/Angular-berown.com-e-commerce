import { Component } from '@angular/core';
import { Products } from '../interfaces/products';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  arrCart:Products[]=[];
  index:number=0;
  constructor(private cart:CartService){}
  ngOnInit(){
    // get cart products 
    this.cart.cart.subscribe((val)=>{
      this.arrCart = val;
    })
  }
  removePro(index:number):void{
    this.cart.removeProduct(index)
  }
}
