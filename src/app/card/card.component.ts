import { Component ,EventEmitter} from '@angular/core';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  counter: number = 0;
  totalprice: number = 0
  items = this.cartService.getItems();

  singleproduct: Product | any = {
    title: '',
    image: '',
    num:0,
    category: '',
    price: '',

    id: '',
  };
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  ngOnInit(): void {
    this.cartService.counterVal.subscribe((count) => (this.counter = count));
    this.cartService.total.subscribe((count) => (this.totalprice = count));
  }
  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }
  clearCart(product: Product) {
   
    
     this.cartService.clearCart(product);
    this.cartService.changeCounter(--this.counter)
    this.cartService.gettotal(this.totalprice-product.price)
    window.alert('Your product has been deleted from the cart!');

  }

  clearAllCart() {
    this.items = [];

    this.cartService.changeCounter(0)
    this.cartService.gettotal(0)
    window.alert('Your products has been deleted from the cart!');
  }
 
  total() {
    return this.items.reduce((sum, prod) => sum += prod.num ,0)
  }
 

  // increaseCounter() {
  //   // this.cartService.changeCounter(++this.counter)
  //   // window.alert('Your product has been added to the cart!');
  // }
  // decreaseCounter() {
  //   // this.cartService.changeCounter(--this.counter)
  //   // window.alert('Your product has been deleted from the cart!');
  // }
}

