import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  products: any[]=[];
  constructor(public myservice: MyService) {
    this.products = this.myservice.productdata();
  }


  ngOnInit(){
    
  }

}
