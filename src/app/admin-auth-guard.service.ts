import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserServiceService } from './user-service.service';
import {switchMap} from 'rxjs/operators';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserServiceService) { }
  canActivate(): Observable<boolean>{
    return this.auth.appUser$
      .pipe(map(appuser => appuser.isAdmin));

  }
   

  }

