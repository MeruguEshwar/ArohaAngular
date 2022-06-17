import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newdash',
  templateUrl: './newdash.component.html',
  styleUrls: ['./newdash.component.css']
})
export class NewdashComponent implements OnInit {

  constructor() { }

  myimage:string = "assets/images/pics 1.png"
  myimage1:string = "assets/images/pic2.png"
  myimage2:string = "assets/images/pic3.png"
  myimage3:string = "assets/images/picmain.png"
  myimage4:string = "assets/images/mainpic.png"
  myimage5:string = "assets/images/icon1.png"
  myimage6:string = "assets/images/icon2.png"
  myimage7:string = "assets/images/icon3.png"
  myimage8:string = "assets/images/icon4.png"
  ngOnInit(): void {
  }

}
