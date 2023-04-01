import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  IsLoader: boolean = false;
  block: boolean = false;
  constructor(private router: Router) {
    // this.router.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationStart) {
    //     this.IsLoader = true;
    //     this.block = true;
    //     // scroll to top 
    //     window.scrollTo(0, 0)
    //   }
    //   if (event instanceof NavigationEnd) {
    //     // Hide progress spinner 
    //     setTimeout(() => {
    //       this.IsLoader = false;
    //       this.block = false
    //       // setTimeout(() => (this.block = false), 300);
    //     }, 500);
    //   }
    //   if (event instanceof NavigationCancel) {
    //     setTimeout(()=>{                           
    //       this.IsLoader = true;
    //       this.block = true;
    //   }, 500);
    //   }
    //   if (event instanceof NavigationError) {
    //     setTimeout(()=>{                           
    //       this.IsLoader = true;
    //       this.block = true;
    //     }, 500);
    //   }
    // });
  }
}
