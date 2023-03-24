import { Component,Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() singleproduct : any = {}
  counter: number = 0;
  constructor(private CartService:CartService){}
  ngOnInit(): void {

    this.CartService.counterVal.subscribe((count) => (this.counter = count));
  }
  increaseCounter(){
    this.CartService.changeCounter(++this.counter)
  }
  
  }
 
   

 

