import { Component, OnInit } from '@angular/core';
import { FoodService } from '../Service/food/food.service';
import { Foods } from '../shared/models/food';
// import { NgxStarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[]=[];

  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.foods = this.fs.getall();
    console.log(this.foods);
  }

}
