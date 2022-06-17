import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  actionType: string = "none";
  getLoginDisplay: string = "none";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onLoginClick(){
    this.route.navigate(['./student-profile']);
  }
 
}
