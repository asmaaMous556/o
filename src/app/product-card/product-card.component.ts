
import { Observable } from 'rxjs';

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/app-product';
import { ShoppingCartService } from '../shopping-cart.service';
import { cart } from '../models/cart';
import { item } from '../models/item';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  implements OnInit{
@Input ('product') product: item;

item:item;
  items: item[];

  constructor( private cartService:ShoppingCartService,private cart:cart) { }
  ngOnInit(){
   this.cartService.getItem(this.product.key).subscribe(product=>{
    this.item=product;
   })
   this.cartService.getCart().subscribe(items=>{
    this.items=items.map(item=>{
      return{
        key: item.payload.doc.id,
        imageUrl:item.payload.doc.data()['imageUrl'],
        title: item.payload.doc.data()['title'],
        price: item.payload.doc.data()['price'],
        quantity:item.payload.doc.data()['quantity'],
        totalPrice:item.payload.doc.data()['totalPrice']
      }
    })
   })
  
   
}
  addToCart(){ 
//  for(let productId in this.items){
//    if(this.product.key==productId){
//      this.cartService.changeQuantity(this.product.key,this.product,+1)
//    }
//    else{
    this.product.quantity=1;   
    this.cartService.AddToCart(this.product);
     
  }
 }


