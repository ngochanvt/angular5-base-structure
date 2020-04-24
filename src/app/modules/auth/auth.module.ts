import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routing } from './routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/service/auth.service';
import { NgModel } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [  AuthService ]
})
export class AuthModule { }
