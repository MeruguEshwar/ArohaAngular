import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  myimage:string = "assets/images/hiring1.jpg"
  myimage1:string = "assets/images/hiring2.png"
  myimage2:string = "assets/images/hiring3.png"
  myimage3:string = "assets/images/hiring4.jpg"
  myimage4:string = "assets/images/hiring5.jpg"
}
