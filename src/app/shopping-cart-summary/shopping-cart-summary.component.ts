import { Component, OnInit, Input } from '@angular/core';
import { item } from '../models/item';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {
@Input ('items') items: item[]

  constructor(private cartService:ShoppingCartService) { }

  ngOnInit() {
    
  }
  
  totalPrice(){
    return this.cartService.getTotalPrice(this.items);
  }

}
