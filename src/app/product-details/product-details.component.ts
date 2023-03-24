import { Component,OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../interfaces/product';
import { ProductDetailsService } from '../services/product-details.service';
import { CartService } from '../services/cart.service';
import productlist from '../../assets/data/products.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
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
 
  constructor(private activatedRoute: ActivatedRoute, private ProductDetailsService: ProductDetailsService,  private cartService: CartService) {}
  
  ngOnInit(): void {
    this.cartService.counterVal.subscribe((count) => (this.counter = count));
    this.cartService.total.subscribe((count) => (this.totalprice = count));
    this.ProductDetailsService.getSingleProduct(this.activatedRoute.snapshot.params['id']).subscribe((res) => (this.singleproduct = res));
  }
  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   this.cartService.changeCounter(++this.counter)
  //   this.cartService.gettotal(this.totalprice+=this.singleproduct.price)
  //   window.alert('Your product has been added to the cart!');
  // }
  
  addProductToCart(product:Product) {
    this.cartService.changeCounter(++this.counter)
    this.cartService.gettotal(this.totalprice+=this.singleproduct.price)
    window.alert('Your product has been added to the cart!');
    const productExistInCart = this.items.find(({title}) => title === product.title); // find product by name
    if (!productExistInCart) {
      this.items.push({...product, num:1}); 
      
      return;
    }
    productExistInCart.num += 1;
     
  }

}

