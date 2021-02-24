import { cart } from './../models/cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { item } from '../models/item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
items: item[];
itemId:string
  sum: number;
 constructor(private cartService:ShoppingCartService) { }

  ngOnInit() {
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
  //console.log(...this.items)
   }) 
  this.getTotalPrice();
}
clearCart(){
  for(let productId in this.items){
    let key =this.items[productId].key
    this.cartService.clearCart(key);
    console.log(key);
    
  }
 
}

  getTotalPrice(){
 return  this.cartService.getTotalPrice(this.items);
 //console.log()
}

}