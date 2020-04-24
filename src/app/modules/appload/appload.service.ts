import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/toPromise';

import { User } from '../auth/user.model';
import { AuthService } from '../../shared/service/auth.service';

@Injectable()
export class ApploadService {
	access_token:string;
	user: User;
	roles: any[];
	constructor(
		private httpClient: HttpClient,  
		private cookieService: CookieService,
		private authService: AuthService
	){}

	getUserInfo(){
		var data_auth = this.authService.auth();
	}
	
	initializeApp(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.access_token = this.cookieService.get('access_token');
		    if(this.access_token!=undefined && this.access_token!=null && this.access_token!=''){
		    	this.getUserInfo();
		    }
		    resolve();

		    // setTimeout(() => {
		    //     console.log(`initializeApp:: inside setTimeout`);
		    //     // doing something

		    //     resolve();
		    // }, 3000);
		});
	}

}
