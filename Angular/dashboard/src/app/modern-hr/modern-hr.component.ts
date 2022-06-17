import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-hr',
  templateUrl: './modern-hr.component.html',
  styleUrls: ['./modern-hr.component.css']
})
export class ModernHrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myimage:string = "assets/images/hr1.jpg"
  myimage1:string = "assets/images/hr2.png"
  myimage2:string = "assets/images/hr3.jpg"
  myimage3:string = "assets/images/hr4.jpg"
  myimage4:string = "assets/images/hr5.jpg"
  myimage5:string = "assets/images/hr6.jpg"
  myimage6:string = "assets/images/hr7.jpg"
}
