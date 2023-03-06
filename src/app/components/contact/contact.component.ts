import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sekletonHeightDetails1:any={one:400,tow:0,three:0}
  Isloading:boolean=true;
  constructor(private _Isloader:LoaderService){}
  ngOnInit() {
    this.checkLoader()
  }
   // CHECK LOADER STATUS 
   checkLoader(){
    this._Isloader._isloader.subscribe((val)=>{
      this.Isloading = val
    })
  } 
}
