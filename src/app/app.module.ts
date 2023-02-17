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

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

////////// C O M P O N E N T S  ////////////
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PopulerComponent } from './components/populer/populer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { FeatureComponent } from './components/feature/feature.component';
import { HotOfferComponent } from './components/hot-offer/hot-offer.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { AccountComponent } from './components/account/account.component';
import { SearchResulteComponent } from './components/search-resulte/search-resulte.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';




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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ],
    
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }