import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  username = ' ';
  servername = 'TestServer';
  serverCreated = false;
  allowNewServeer = false;

  constructor(){
    setTimeout(() => {
        this.allowNewServeer = true;
    },2000);
  }

  oncreateServer(){
    this.serverCreated = true;
    
  }

isShown: boolean = false ; // hidden by default


toggleShow() {
this.isShown = ! this.isShown;
this.isShown = true;
}

}
