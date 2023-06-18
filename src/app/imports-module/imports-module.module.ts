import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModuleRoutingModule } from './imports-module-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { ToastModule } from 'primeng/toast';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {RatingModule} from 'primeng/rating';
import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImportsModuleRoutingModule,
    SwiperModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
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
  exports:[
    CommonModule,
    ImportsModuleRoutingModule,
    SwiperModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    NgxPaginationModule,
    NgxImageZoomModule,
    NgxSkeletonLoaderModule,
    RatingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule, 
    ToastrModule
  ]
})
export class ImportsModuleModule { }
