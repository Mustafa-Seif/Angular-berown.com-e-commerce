////////// M O D U L E S  ////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { AppRoutingModule } from '../app-routing.module';

////////// C O M P O N E N T S  ////////////
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SliceNamePipe } from './pipes/slice-name.pipe';
import { ImportsModuleModule } from '../imports-module/imports-module.module';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SliceNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    AppRoutingModule,
   ImportsModuleModule
   
  ],
  exports:[
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
