import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule,AngularFireList  } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import{CustomFormsModule} from 'ng2-validation';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserServiceService } from './user-service.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { cart } from './models/cart';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { DatePipe } from '@angular/common';

//import { DataTableModule } from 'angular-4-data-table';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    CheckOutFormComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule ,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    //DataTableModule,
    
    RouterModule.forRoot([
      {path:'',component: ProductsComponent},
      {path:'login',component:LoginComponent},
      {path:'products',component:ProductsComponent },
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuardService]},
      {path:'order-success/:id',component:OrderSuccessComponent ,canActivate:[AuthGuardService]},
      {path:'my-orders',component:MyOrdersComponent, canActivate:[AuthGuardService]},
      
     
      {path:'admin/products/new',component:ProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},

      {path:'admin/products/:id',component:ProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},

      {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},

      {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      
      

    ])
    
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserServiceService,
   CategoryService,
   ProductService,
   AdminAuthGuardService,
   ShoppingCartService,
   cart,
   DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
