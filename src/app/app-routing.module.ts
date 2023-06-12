import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './auth/components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchResulteComponent } from './components/search-resulte/search-resulte.component';
import { RegisterComponent } from './auth/components/register/register.component';
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
    component:AccountComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'auth', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path:"products",
    component:ProductsComponent
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
    component:RegisterComponent,
  },

  {
    path:"not-found",
    component:NotFoundComponent
  },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
