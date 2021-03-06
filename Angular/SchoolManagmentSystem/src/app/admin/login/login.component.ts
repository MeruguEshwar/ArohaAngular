import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,
    private notifyService:NotificationService) { }

  ngOnInit(): void {
  }

  go(){
		this.route.navigate(['./signup']); // navigate to other page
	}

  StudentInfo(){ 
    this.route.navigate(['./student-header']);
  }

  showToasterWarning(){
    this.notifyService.showSuccess("Login successfully","Hi... !!");
 }



  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); } 

}
