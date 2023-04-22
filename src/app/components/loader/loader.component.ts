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
    this.IsLoader = true;
      this.block = true
    setTimeout(() => {
      this.IsLoader = false;
      this.block = false;
      // setTimeout(() => (this.block = false), 300);
    }, 500);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0)
      }
    });
  }
}
