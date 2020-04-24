import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthenticationGuardService } from './modules/authentication/authentication-guard.service';

const routes: Routes = [
  	{ 
  		path: 'home', 
  		loadChildren: './modules/home/home.module#HomeModule',
  	},
  	{
	    path: 'auth',
	    loadChildren: './modules/auth/auth.module#AuthModule',
  	},
    { path: '**', redirectTo: 'home' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes)
