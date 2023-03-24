import { Component ,OnInit } from '@angular/core';
import {Product} from '../interfaces/product'
import productlist from '../../assets/data/products.json'
import { ProductDetailsService } from '../services/product-details.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] =[]
  constructor(private ProductDetailsService: ProductDetailsService){}
  ngOnInit(): void {
    this.ProductDetailsService.getProducts().subscribe((res: any) => this.products = res);
  }
}
