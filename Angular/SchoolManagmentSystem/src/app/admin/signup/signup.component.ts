import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  startDate = new Date(1990, 0, 1);
 
  constructor(
      private notifyService:NotificationService,
      private route:Router) { }

  ngOnInit(): void {
  }

  seasons: string[] = ['Male', 'Female'];

  showToasterWarning(){
    this.notifyService.showSuccess("Please Login !!", "Signup successfully");
}

go(){
  this.route.navigate(['./login']); // navigate to other page
}



signin: FormGroup = new FormGroup({
  email: new FormControl('', [Validators.email, Validators.required ]),
  password: new FormControl('', [Validators.required, Validators.min(3) ])
});

hide = true;
get emailInput() { return this.signin.get('email'); }
get passwordInput() { return this.signin.get('password'); } 


}
