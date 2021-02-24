import { item } from './../models/item';
import { Router } from '@angular/router';
import { OrderService } from './../order.service';
import { Component, OnInit, Input } from '@angular/core';
import { order, shipping } from '../models/order';
import { ShoppingCartService } from '../shopping-cart.service';
import { DatePipe } from '@angular/common';
import {FormBuilder, PatternValidator} from '@angular/forms' ;
import{Validators} from '@angular/forms'



@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit {
  @Input ('items') items:item[]
  order:order;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{11}$";

  shippingForm=this.fb.group({
    name:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    phone:['',[Validators.required,Validators.pattern(this.mobNumberPattern)]]

  })

 date = (new Date()).toString();

  constructor(private cartService:ShoppingCartService,
     private OrderService: OrderService, 
     private router : Router,
     private datePipe:DatePipe,
     private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.date=this.datePipe.transform(this.date,'yyyy-MM-dd');
    console.log(this.shippingForm.errors);
    console.log(this.date);
  }




  async placeOrder(shipping:shipping){
    this.order = {
     date:this.date,
      shipping: shipping,
      items: this.items
         }
 let result= await this.OrderService.storeOrder(this.order)
  this.router.navigate(['/order-success', result.id])

  }

}
