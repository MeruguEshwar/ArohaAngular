import { Component } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class Servercomponent{

    serverId: number = 10;
    serverStatus: string = 'offline';
    

    getserverStatus() {
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}