import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { PopulerComponent } from './populer/populer.component';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SwiperModule } from 'swiper/angular';
import { FeatureComponent } from './feature/feature.component';
import { HotOfferComponent } from './hot-offer/hot-offer.component';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatCardModule} from '@angular/material/card';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';

// import { ServiceWorkerModule } from '@angular/service-worker';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    // MatSlideToggleModule,
    BrowserAnimationsModule,
    // MatCardModule,
    // AngularFontAwesomeModule
  
    ],
    // SwiperModule,

    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }