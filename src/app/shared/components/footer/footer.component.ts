import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
dateYear?:number;
ngOnInit(){
  this.dateYear = new Date().getFullYear()
}
}
