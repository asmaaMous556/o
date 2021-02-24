import { order } from './models/order';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private afStore:AngularFirestore, private auth :AuthService ) { }
  storeOrder(order){
    return this.afStore.collection('users/'+this.auth.userId+'/orders').add(order);
  }
  getOrder(orderId:string){
    return this.afStore.doc<order>('users/'+this.auth.userId+'/orders/'+orderId).valueChanges();
  }

  getOrders(){
    return this.afStore.collection<order>('users/'+this.auth.userId+'/orders/').valueChanges();

  }
}
