import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { AngularFireDatabaseModule,AngularFireList, SnapshotAction  } from '@angular/fire/database';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/app-product';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
products$:Observable<any[]>;


//filteredProducts;
//subscription:Subscription;
//;
// AngularFireList<any[]> ;
  constructor( private productService:ProductService) {
   this.products$= this.productService.editById();
  //  .subscribe(products=>this.filteredProducts= this.products=products);
   // this.products$= 
   }
  //  filter(query:string){
  //   this.filteredProducts =(query)?
  //   this.products(p=>p.title.includes(query))

  //  }

//    ngOnDestroy(){
// this.subscription.unsubscribe();
//    }



  ngOnInit(): void {
    
  }

}
