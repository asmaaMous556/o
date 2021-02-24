import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/app-product';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';
import { cart } from '../models/cart';
import { item } from '../models/item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
products:Product[];
FilteredProducts: Product[] ;
 category:string;
  subscription:Subscription;
  cart: cart;

  constructor(private  route :ActivatedRoute,
  private productService : ProductService, 
  private cartService: ShoppingCartService) {}
   ngOnInit(){
      //this.cartService.getCart().subscribe(cart=>this.cart=cart);
    this.productService.getAll().pipe(switchMap(products=>{
        this.products=products; 
        return this.route.queryParamMap;
        
      }))
     .subscribe(params=>{
        this.category=params.get('category')
      this.applyFilter();   
      });
    
     
    
   }

   applyFilter(){
    this.FilteredProducts=(this.category) ?
    this.products.filter(p=>p.category===this.category) : //if we have a cached category we will call filter method
    this.products
   }

  }
