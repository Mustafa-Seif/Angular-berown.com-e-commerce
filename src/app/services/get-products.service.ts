import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  constructor(private _http: HttpClient){}
  getProData(){
  return this._http.get<Products[]>(environment.apiRoot)
  }
}

