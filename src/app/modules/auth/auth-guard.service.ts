import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
    	var current_path = this.router.url;
    	console.log(current_path, 'current_path' );
    	
      	this.router.navigate(['auth/login']);
      	return false;
    }
    return true;
  }
}