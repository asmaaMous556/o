import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { cart } from '../models/cart';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit  {

userName:string;
cart:cart
isUser:boolean;
isAdmin:boolean;

appUser:AppUser

  constructor( private auth: AuthService ) {
   // this.auth.user$;
  


  }
   ngOnInit() {
   this.auth.appUser$.subscribe(appUser=>{
  this.appUser=appUser
  if(this.appUser.isAdmin===true){
    this.isAdmin=true;
  }
   
   });
   this.auth.user$.subscribe(user=>{
     if(user){
       this.auth.userId=user.uid;
       this.userName=user.displayName
       this.isUser=true;
       
     }
   })

   }

  logout(){
    this.auth.logout();

  }

  

}
