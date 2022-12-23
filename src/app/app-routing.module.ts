import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"wish-list",
    component:WishListComponent
  },
  {
    path:"product-details/:id",
    component:ProductDetailsComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
