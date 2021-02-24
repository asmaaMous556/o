import { OrderService } from './../order.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { order } from '../models/order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
orderId:string
orders:order[]
order:order
  constructor(private orderService:OrderService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(orderId=>{
     this.orderId=orderId.get('id');
   });

   this.orderService.getOrder(this.orderId).subscribe(order=>{
    this.order=order
   })

   this.orderService.getOrders().subscribe(orders=>{
     this.orders=orders
   })
  }

}
