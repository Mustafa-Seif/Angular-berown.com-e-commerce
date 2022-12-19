import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  private products = new BehaviorSubject(
    [
      {
        id: 1,
        title: "Laptops",
        image: "./assets/images/products/laptop (4).png",
        description: "Laptop XS3000 WiFi Smart",
        price: "310.00"
      },
      {
        id: 2,
        title: "Headphones",
        image: "./assets/images/products/headphone1 (1).png",
        description: "Laptop XS3000 WiFi Smart",
        price: "95.00"
      },
      {
        id: 3,
        title: "Laptops",
        image: "./assets/images/products/laptop (3).png",
        description: "Ellite Pro Book 15'6 7500U",
        price: "570.00"
      },
      {
        id: 4,
        title: "Headphones",
        image: "./assets/images/products/headphone1 (2).png",
        description: "Laptop XS3000 WiFi Smart",
        price: "50.00"
      },
      {
        id: 5,
        title: "Laptops",
        image: "./assets/images/products/laptop (1).png",
        description: "Tablet VX3000 Extra Light",
        price: "400.00"
      },
      {
        id: 6,
        title: "Headphones",
        image: "./assets/images/products/headphone1 (3).png",
        description: "Laptop XS3000 WiFi Smart",
        price: "30.00"
      },
      {
        id: 7,
        title: "Laptops",
        image: "./assets/images/products/laptop (2).png",
        description: "Tablet VX4000 8500 3TB",
        price: "520.00"
      },
      {
        id: 8,
        title: "Headphones",
        image: "./assets/images/products/headphone1 (4).png",
        description: "Laptop XS3000 WiFi Smart",
        price: "45.00"
      },
      {
        id: 9,
        title: "Laptops",
        image: "./assets/images/products/laptop (1).png",
        description: "Ellite Pro Book 15'6 7500U",
        price: "1200.00"
      },
      {
        id: 10,
        title: "Headphones",
        image: "../../assets/images/products/laptop (3).png",
        description: "Laptop XS3000 WiFi Smart",
        price: "90.00"
      }
    ]
  )
  arrProducts = this.products.asObservable()
  constructor() { }
  
}
