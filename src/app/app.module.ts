import { NgModule } from '@angular/core';
////////// M O D U L E S  ////////////
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';


////////// C O M P O N E N T S  ////////////
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PopulerComponent } from './populer/populer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { HotOfferComponent } from './hot-offer/hot-offer.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AccountComponent } from './account/account.component';
import { SearchResulteComponent } from './search-resulte/search-resulte.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './loader/loader.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    HomeComponent,
    PopulerComponent,
    FeatureComponent,
    HotOfferComponent,
    OurBlogComponent,
    FooterComponent,
    ProductDetailsComponent,
    CartComponent,
    ContactComponent,
    WishListComponent,
    AccountComponent,
    SearchResulteComponent,
    SignInComponent,
    ProductsComponent,
    NotFoundComponent,
    LoaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule,
    ],
    
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }