import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import{CustomFormsModule} from 'ng2-validation';
import { mainModule } from 'process';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { snapshotChanges } from '@angular/fire/database';
import { Product } from 'src/app/models/app-product';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$:Observable<any[]>;
  product:Product;
  productId: any;

 
  
  constructor(private router :Router,categoryService: CategoryService,
      private productService : ProductService,
      private route :ActivatedRoute) 
     {
this.categories$=categoryService.getAll();

this.productId= this.route.snapshot.paramMap.get('id');
  if(this.productId) this.productService.getProductById(this.productId)
  .subscribe(p=>this.product=p)
  
     }
 

   
   save(product:Product){
     if(this.productId) this.productService.updateProduct(this.productId,product)
     
     else this.productService.create(product);
     
      this.router.navigate(['/admin/products']);
   }

   delete(){
     if (!confirm('are you sure?')) return ;
     {
       this.productService.deleteProduct(this.productId);
       this.router.navigate(['/admin/products']);
     }
   }
  

  

  ngOnInit(): void {
  }


}
