////////// M O D U L E S  ////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { AppRoutingModule } from '../app-routing.module';

////////// C O M P O N E N T S  ////////////
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    AppRoutingModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
