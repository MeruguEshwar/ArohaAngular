import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const openNav: any;
declare const closeNav: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  openNav(){
    openNav();
  }

  closeNav(){
    closeNav();
  }

  go(){
    this.route.navigate(['/student']);
  }

}
