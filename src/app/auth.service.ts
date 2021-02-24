import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserServiceService } from './user-service.service';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  userId:string;

  constructor( private userService : UserServiceService,
    private afAuth :AngularFireAuth,
     private route : ActivatedRoute) {

   let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);

    this.user$=afAuth.user;
   }

  login(){
    this.afAuth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
    
  }

  logout(){
    this.afAuth.signOut();
  
  }

 get appUser$(): Observable<AppUser>{
   return this.user$
   .pipe(switchMap(user=>{ // switchMap:emitting values only from the most recently projected Observable.
     return this.userService.get(user.uid);
   }))
   }

   }
