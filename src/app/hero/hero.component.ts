
import { Component,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  // encapsulation:ViewEncapsulation.None,
})
export class HeroComponent {
  
}
