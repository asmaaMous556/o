import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private userService : UserServiceService ,private auth:AuthService, private router :Router){
  this.auth.user$.subscribe(user=>{
    if (user) { 
    userService.save(user)
      
     let returnUrl=  localStorage.getItem('returnUrl');
     router.navigateByUrl(returnUrl);

    }});
 }
}
