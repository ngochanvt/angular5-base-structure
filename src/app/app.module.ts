import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { JwtModule } from '@auth0/angular-jwt';

import { Routing } from './routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { TopbarComponent } from './shared/layout/topbar/topbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';
import { ApploadModule } from './modules/appload/appload.module';
import { AuthGuardService } from './modules/auth/auth-guard.service';
import { AuthService } from './modules/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    ApploadModule,
    // JwtModule.forRoot({})
  ],
  providers: [CookieService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
