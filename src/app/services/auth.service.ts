import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoged =  new BehaviorSubject(false);
  loged = this.isLoged.asObservable()
  
  constructor() { }
  changeLogStatus(val:boolean){
    this.isLoged.next(val);
  }
}
