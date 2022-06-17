import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridex',
  templateUrl: './gridex.component.html',
  styleUrls: ['./gridex.component.css']
})
export class GridexComponent implements OnInit {

  myimage:string = "assets/images/Pipeline1.png"
  constructor() { }

  ngOnInit(): void {
  }

}
