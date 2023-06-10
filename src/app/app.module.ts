////////// M O D U L E S  ////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {RatingModule} from 'primeng/rating';
////////// C O M P O N E N T S  M O D U L E S ////////////
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
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
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxImageZoomModule,
    NgxSkeletonLoaderModule,
    RatingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-top-left',
    }), // ToastrModule added
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
