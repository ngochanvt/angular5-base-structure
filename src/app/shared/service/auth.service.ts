import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../modules/auth/user.model';

@Injectable()
export class AuthService {

  readonly rootUrl = 'http://localhost:35257';
  // date:Date;
  header_config = {
    headers: new HttpHeaders({'No-Auth':'True'}),
  }
  constructor(private http: HttpClient,  private cookieService: CookieService) { }

  auth(){
    const mock_return = {
      UserName: 'Hân Trần',
      Password: '1234',
      Email: 'mail@mail.com',
      FirstName: 'Hân',
      LastName: 'Trần',
      Roles : ['student'],
      token: '123token'
    }
    this.cookieService.set('access_token', mock_return.token, 20);
    return mock_return;
  }

  login(user: User){
    const mock_return = {
      UserName: 'Hân Trần',
      Password: '1234',
      Email: 'mail@mail.com',
      FirstName: 'Hân',
      LastName: 'Trần',
      Roles : ['student'],
      token: '123token'
    }
    this.cookieService.set('access_token', mock_return.token, 20);
    return mock_return;
  }

  signup(user: User,roles : string[]) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Roles : roles
    }
    
    const mock_return ={
      Succeeded: true,
      token: '123token'
    }
    this.cookieService.set('access_token', mock_return.token, 20);
    // localStorage.setItem('access_token', '123token');
    return mock_return;
    // var reqHeader = new HttpHeaders({'No-Auth':'True'});
    // return this.http.post(this.rootUrl + '/api/User/Register', body, this.header_config);
  }

  logout(){
    this.cookieService.delete('access_token');
  }

}
