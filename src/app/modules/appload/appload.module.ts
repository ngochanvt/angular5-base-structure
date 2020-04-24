import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ApploadService } from './appload.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

export function init_app(appLoadService: ApploadService) {
    return () => appLoadService.initializeApp();
}

// export function get_settings(appLoadService: AppLoadService) {
//     return () => appLoadService.getSettings();
// }

@NgModule({
  imports: [HttpClientModule, CommonModule],
  providers: [
    ApploadService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [ApploadService], multi: true },
    // { provide: APP_INITIALIZER, useFactory: get_settings, deps: [ApploadService], multi: true }
  ],
  declarations: []
})

export class ApploadModule { 
	constructor(private router: Router) {
	    this.router.events.subscribe((event: Event) => {
	    	
	        if (event instanceof NavigationStart) {
	            console.log(event, 'NavigationStart');
	        }

	        if (event instanceof NavigationEnd) {
	        	console.log(event, 'NavigationEnd');
	            // Hide loading indicator
	        }

	        if (event instanceof NavigationError) {
	            // Hide loading indicator

	            // Present error to user
	            console.log(event.error);
	        }
	    });
	}
}

