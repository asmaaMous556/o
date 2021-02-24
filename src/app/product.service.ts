import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';
import { Product } from './models/app-product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 product :Observable<Product>;

  constructor( private db: AngularFireDatabase) { }

  create(product){
  return   this.db.list('/products').push(product);
  }
  getAll(){
   return  this.db.list<Product>('/products').valueChanges();  
  }

  getProductById (productId):Observable<Product>{ 
  return this.product= this.db.object<Product>('/products/'+ productId).valueChanges();
  // return the object of this id 
  }
  
   updateProduct (productId,product){
     return this.db.object('/products/'+productId).update(product);
   }
   deleteProduct (productId){
     return this.db.object('/products/'+productId).remove();
   }

   editById(){
    return  this.db.list('/products').snapshotChanges();  //get the data of the product by id // get by id 
   }
 
}
