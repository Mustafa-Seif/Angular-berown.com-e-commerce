import { Component, DoCheck } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [MessageService],
})
export class NavBarComponent implements DoCheck {
  theCartLength: number = 2;
  searchVal: string = '';
  logedAuth:boolean=false;

  constructor(
    private cart: CartService,
    private route: Router,
    private messageService: MessageService,
    private islog:AuthService
  ) {}

  ngOnInit() {
    // get cart length
    this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });

    this.islog.loged.subscribe((val)=>{
      this.logedAuth = val;
    })
  }
  // get cart length after change
  ngDoCheck() {
    this.cart.cart.subscribe((val) => {
      this.theCartLength = val.length;
    });
  }

  goToSearchResults(): void {
    // this.route.navigate(["search-results", "1"]);
    this.route.navigate(['/search-results', this.searchVal]);
    this.searchVal = '';
  }

  authCart() {
    
      this.messageService.add({
      key: 'authCart',
      severity: 'info',
      summary: 'Info',
      detail: 'please login first!',
    });
  }

  
}
