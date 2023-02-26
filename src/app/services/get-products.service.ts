import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  constructor(private _http: HttpClient){}
  getProData(){
  return this._http.get<Products[]>('../../assets/data/db.json')
  }
}

