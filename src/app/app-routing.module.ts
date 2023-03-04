import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './auth/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchResulteComponent } from './components/search-resulte/search-resulte.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { RegisterComponent } from './auth/register/register.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"cart",
    component:CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"wish-list",
    component:WishListComponent,
    canActivate:[AuthGuard]
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
    path:"search-results",
    component:SearchResulteComponent
  },
  {
    path:"product-details/:id",
    component:ProductDetailsComponent
  },
  {
    path:"register",
    component:RegisterComponent
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
