import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  constructor(){}
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart(product:any) {
    this.items.splice(this.items.indexOf(product), 1);
  
    
  } 
  clearAllCart() {
    this.items = [];
    return this.items;
  }
 private counter = new BehaviorSubject(0);
 private totalprice = new BehaviorSubject(0);
 counterVal = this.counter.asObservable();
 total = this.totalprice.asObservable();



 changeCounter(newCounter: number) {

   this.counter.next(newCounter);
 }
 gettotal(price: number) {

  this.totalprice.next(price);
}
}
