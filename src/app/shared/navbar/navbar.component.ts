import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  counter: number = 0;
  constructor(private CartService:CartService){}
  ngOnInit(): void {

    this.CartService.counterVal.subscribe((count) => (this.counter = count));
  }
  increaseCounter(){
    this.CartService.changeCounter(++this.counter)
    window.alert('Your product has been added to the cart!');
  }

}
