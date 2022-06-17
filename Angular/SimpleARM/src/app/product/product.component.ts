import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  

  photoId= 0;
  productId= 0;
  

  constructor(private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.active.params.subscribe((params) => {
      console.log(params);
      // this.photoId = this['params'].photoId;
      // const interValue = params;
      // this.photoId = interValue['photoId'];
  
      // this.productId = interValue['productId'];
     
    });
  }

}
