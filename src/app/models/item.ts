
import { Product } from 'src/app/models/app-product';
export class item{
key:string;
title:string;
price:number;
imageUrl:string;
quantity: number;

constructor(){
}
   
get totalPrice(){
    return this.price * this.quantity;
    
}

}