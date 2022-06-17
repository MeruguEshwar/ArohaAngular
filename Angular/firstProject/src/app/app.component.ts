import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';


  role1route1()
  {
    console.log("this is from role1 and route 1");
  }
}
