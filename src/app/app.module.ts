////////// M O D U L E S  ////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
////////// C O M P O N E N T S  M O D U L E S ////////////
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
////////// C O M P O N E N T S  ////////////
import { AppComponent } from './app.component';
import { PopulerComponent } from './components/populer/populer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { FeatureComponent } from './components/feature/feature.component';
import { HotOfferComponent } from './components/hot-offer/hot-offer.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { SearchResulteComponent } from './components/search-resulte/search-resulte.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { FirebaseAuthService } from './services/firebase-auth.service';
import { SliceNamePipe } from './pipes/slice-name.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ImportsModuleModule } from './imports-module/imports-module.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    PopulerComponent,
    FeatureComponent,
    HotOfferComponent,
    OurBlogComponent,
    ProductDetailsComponent,
    CartComponent,
    ContactComponent,
    WishListComponent,
    SearchResulteComponent,
    ProductsComponent,
    NotFoundComponent,
    LoaderComponent,
    SkeletonComponent,
    SliceNamePipe,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    SharedModule,
    AuthModule,
    ImportsModuleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    FirebaseAuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
