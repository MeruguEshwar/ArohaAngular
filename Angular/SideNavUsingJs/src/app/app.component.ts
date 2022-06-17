import { Component } from '@angular/core';

declare const myTest: any;

declare const openNav: any;
declare const closeNav: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SideNavUsingJs';

  onClick(){
    myTest();
  }

  closeNav(){
    closeNav();
  }

  openNav(){
    openNav();
  }
}
