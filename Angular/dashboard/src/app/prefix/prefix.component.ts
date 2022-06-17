import { Component, OnInit } from '@angular/core';
import { NaniPipe } from '../nani.pipe';

@Component({
  selector: 'app-prefix',
  templateUrl: './prefix.component.html',
  styleUrls: ['./prefix.component.css']
})
export class PrefixComponent implements OnInit {
  
  // element="google.com";
  // subDomain='';

  // getSubdomainLink(element: any) {
  //   return String(element.subDomain).startsWith('http') ? 
    // element.subDomain : 'http://' + element.subDomain;
// }
//   getClickableLink = (link: string) => {
//   return link.startsWith("http://") || link.startsWith("https://") ?
//     link
//     : `http://${link}`;
// };

  constructor() { }

  ngOnInit(): void {
  }

}
