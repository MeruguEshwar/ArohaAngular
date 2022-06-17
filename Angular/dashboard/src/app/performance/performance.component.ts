import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  constructor() { }

  myimage:string = "assets/images/performance1.jpg"
  myimage1:string = "assets/images/performance2.jpg"
  myimage2:string = "assets/images/performance3.jpg"
  myimage3:string = "assets/images/performance4.jpg"
  myimage4:string = "assets/images/performance5.jpg"

  ngOnInit(): void {
  }


}
