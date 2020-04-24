import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
	{ 
		path: '', 
		children: [
			{
				path: '',
        		redirectTo: 'home',
        		pathMatch: 'full'
			},
	      	{
		        path: 'login', component: LoginComponent
	      	},
	      	{
	      		path: 'signup', component: SignupComponent
	      	}
	    ]
	}
]

// export const routing: ModuleWithProviders = RouterModule.forChild(routes)

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class routing { }