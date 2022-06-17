import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationsStatus = 'No Server was created!';
  serverName = 'TestServer';
 

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onclick(){
    this.serverCreationsStatus = 'Server was created! Name is '+this.serverName;
  }

  onupdateserverName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
