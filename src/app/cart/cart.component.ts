import { Component } from '@angular/core';
import { Products } from '../interfaces/products';
import { CartService } from '../services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MessageService],

})
export class CartComponent {
  arrCart:Products[]=[];
  index:number=0;
  constructor(private cart:CartService, private messageService: MessageService){}
  ngOnInit(){
    // get cart products 
    this.cart.cart.subscribe((val)=>{
      this.arrCart = val;
    })
  }
  removePro(index:number):void{
    this.cart.removeProduct(index)
  }
  // toast
  removeFromCart(){
    this.messageService.add({
      key: 'removePro',
      severity: 'info',
      summary: 'Deleted',
      detail: 'The product has been deleted from cart',
    });
  }
}
