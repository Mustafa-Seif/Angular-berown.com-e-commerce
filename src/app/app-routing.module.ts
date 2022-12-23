import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SearchResulteComponent } from './search-resulte/search-resulte.component';
import { SignInComponent } from './sign-in/sign-in.component';
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
    path:"account",
    component:AccountComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"sign-in",
    component:SignInComponent
  },
  {
    path:"search-results/:val",
    component:SearchResulteComponent
  },
  {
    path:"product-details/:id",
    component:ProductDetailsComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
