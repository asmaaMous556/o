
import { item } from './item';

export interface order{
   date:string
   shipping:shipping ,
    items:item[],
    
    
 }
export interface shipping 
   {
    name:string,
    address1:string,
    address2:string,
    city:string,
    phoneNum:string
   }
     