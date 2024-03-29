import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private Isloader = new  BehaviorSubject<boolean>(true)
  _isloader = this.Isloader.asObservable()
  constructor() { }
  showLoader():void{
    this.Isloader.next(true)
  }
  hideLoader():void{
    this.Isloader.next(false)
  }
}
