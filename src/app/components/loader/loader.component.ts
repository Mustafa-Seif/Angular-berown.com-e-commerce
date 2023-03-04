import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  IsLoader: boolean = true;
  block: boolean = true;
  currentRoute: string = '';
  constructor(private router: Router) {
    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        this.IsLoader = true;
        this.block = true;
        // scroll to top 
        window.scrollTo(0, 0)
      }
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        setTimeout(() => {
          this.IsLoader = false;
          setTimeout(() => (this.block = false), 300);
        }, 300);
      }
    });
  }
}
