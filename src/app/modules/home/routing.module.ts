import { DashboardGuessComponent } from './dashboard-guess/dashboard-guess.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';

export const routes: Routes = [
	{ 
		path: '', 
		children: [
			{
				path: '',
        		redirectTo: '',
        		pathMatch: 'full'
			},
			{ 
				path: 'student', 
				component: DashboardStudentComponent,
				canActivate: [AuthGuard] 
			}
		]
	}, // default route of the module
	
]

// export const routing: ModuleWithProviders = RouterModule.forChild(routes)
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class routing { }