import { Router } from '@angular/router';
import { order, shipping } from './../models/order';
import { OrderService } from './../order.service';
import { cart } from './../models/cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { item } from '../models/item';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
 items:any;
 

  constructor(private cartService:ShoppingCartService) { }

  ngOnInit(){
    this.cartService.getCart().subscribe(items=>{
      this.items=items.map(item=>{
        return {
          key:item.payload.doc.id,
          title: item.payload.doc.data()['title'],
          price: item.payload.doc.data()['price'],
          imageUrl: item.payload.doc.data()['imageUrl'],
          quantity: item.payload.doc.data()['quantity'],
        
        }
      })
      console.log(this.items);
    })
   
  }


 
}
