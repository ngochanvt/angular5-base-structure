import { Component, OnInit } from '@angular/core';

// import { ToastrService } from 'ngx-toastr'
import { User } from '../user.model';
import { AuthService } from '../../../shared/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
	user: User;
	emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
	roles : any[];

	constructor(private authService: AuthService) {
		//, private toastr: ToastrService
	}

	ngOnInit() {
 		this.resetForm();
	}

	resetForm() {
	    this.user = {
	      	UserName: '',
	      	Password: '',
	      	Email: '',
	      	FirstName: '',
	      	LastName: ''
	    }
	    this.roles = [];
	}

	OnSubmit() {
		console.log(this.user, 'form');
	    // var x = this.roles.filter(x => x.selected).map(y => y.Name);
	    
	    // this.authService.signup(form.value,x)
	    //   	.subscribe((data: any) => {
		   //      if (data.Succeeded == true) {
		   //        this.resetForm(form);
		   //        console.log('User registration successful');
		   //        // this.toastr.success('User registration successful');
		   //      }
		   //      else console.log(data.Errors[0]);
		   //        // this.toastr.error(data.Errors[0]);
	    // });
	}

	updateSelectedRoles(index) {
	    this.roles[index].selected = !this.roles[index].selected;
	}

}
