import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products = [
    {"id":1,"company":"Apple","price":75000,"Model":'iphone'},
    {"id":2,"company":"Samsung","price":5000,"Model":'j7'},
    {"id":3,"company":"One Plus","price":7000,"Model":'Nord'},
    {"id":4,"company":"Vivo","price":15000,"Model":'V7'}
]

  constructor() {
   
   }

  ngOnInit(): void {
  }

}
