import { ShoppingCartService } from './../shopping-cart.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/app-product';
import { cart } from '../models/cart';
import { item } from '../models/item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit ,OnDestroy{
  @Input ('product') product: item;
  item:item;
  quantity:number;
  quantitySub:Subscription
  constructor(private cartService:ShoppingCartService, private  cart: cart) { }
  

  ngOnInit(): void {
 this.quantitySub= this.cartService.getItem(this.product.key).subscribe(product=>{
    this.quantity=product.quantity
    
  })
   
  }
  
     removeFromCart(){
       this.cartService.changeQuantity(this.product.key,this.product,-1);
     }

     addToCart(){
       this.cartService.changeQuantity(this.product.key,this.product,+1)
     }

   
     ngOnDestroy(): void {
      this.quantitySub.unsubscribe();
     }
}
