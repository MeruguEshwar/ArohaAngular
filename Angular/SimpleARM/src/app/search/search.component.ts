import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  color ='';
  priceTo = 0;
  priceFrom = 0;
  size = 'M';

  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      // this.color = params.color;
      // console.log(this.color);
      // this.priceTo = params['priceTo'];
      // this.priceFrom = params['priceFrom'];
      // this.size = params['size'];
    });
   }

  


   

  
  ngOnInit(): void {
   
  }

}
