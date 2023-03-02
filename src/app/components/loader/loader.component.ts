import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  IsLoader:boolean=true;
  block:boolean=true;
  ngAfterViewInit(){
    // HIDE LOADER 
    setTimeout(()=>{
      this.IsLoader=false
      setTimeout(()=>this.block=false,2000)
    },3000)
  }
}
