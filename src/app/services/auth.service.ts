import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoged =  new BehaviorSubject(false);
  loged = this.isLoged.asObservable()
  
  constructor() { 
    this.isLoged.next(JSON.parse(localStorage.getItem('authStorage') || "false"));
  }
  changeLogStatus(val:boolean){
    this.isLoged.next(val);
    localStorage.setItem('authStorage', JSON.stringify(val));
  }
}
