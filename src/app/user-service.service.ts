import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {  AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AppUser } from './models/app-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private db: AngularFireDatabase, private afStore:AngularFirestore) {

   }

   save ( user: firebase.User){
     this.afStore.doc('/users/'+user.uid).set({
       name: user.displayName,
       email : user.email
     }) // save the data of the user in firebase
   }

   get (uid: string):Observable<AppUser>{
  return this.afStore.doc<AppUser>('/users/'+uid).valueChanges();

   }
}
