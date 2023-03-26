import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorToFetchService {
  // private errorFetch = new  BehaviorSubject<boolean>(false)
  // _errorFetch = this.errorFetch.asObservable()
  constructor(private toastr: ToastrService) { }
  ErrorMassage(errorMassage:any):void{
    this.toastr.error('Error to fetch form server!',"Error!",{
      closeButton:true,
      disableTimeOut:true

    })
  }
 
}
