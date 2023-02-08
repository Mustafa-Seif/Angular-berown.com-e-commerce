import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Berwon.';
  IsLoader:boolean=true;
  block:boolean=true;
  constructor(private router:Router){}
  ngOnInit() {
    // scroll to top on route change 
    this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}

ngAfterViewInit(){
  // HIDE LOADER 
  setTimeout(()=>{
    this.IsLoader=false
    setTimeout(()=>this.block=false,2000)
  },3000)
  
}
}
