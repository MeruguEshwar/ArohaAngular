import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getall(): Foods[]{
    return[
      {
        id: 1,
        price: 10,
        name: "piza",
        favorite: false,
        star: 4.5,
        tags: ['fastfood','piza','lunch'],
        imageUrl: 'assets/Images/01.jpg',
        cookTime: '10-20',
        origins:['italy'] ,
      },
      {
        id: 2,
        price: 20,
        name: "puf",
        favorite: false,
        star: 3.5,
        tags: ['fastfood','piza','lunch'],
        imageUrl: '/assets/Images/02.jpg',
        cookTime: '10-25',
        origins:['us']  
      },
      {
        id: 3,
        price: 30,
        name: "veg piza",
        favorite: false,
        star: 4.8,
        tags: ['fastfood','piza','lunch'],
        imageUrl: '/assets/Images/01.jpg',
        cookTime: '10-15',
        origins:['uk']  
      },
      {
        id: 4,
        price: 40,
        name: "Biriyani",
        favorite: false,
        star: 4.2,
        tags: ['fastfood','piza','lunch'],
        imageUrl: '/assets/Images/04.jpg',
        cookTime: '10-18',
        origins:['india']  
      },
      {
        id: 5,
        price: 20,
        name: "Chicken Puf",
        favorite: false,
        star: 4.8,
        tags: ['fastfood','piza','lunch'],
        imageUrl: '/assets/Images/05.jpg',
        cookTime: '10-15',
        origins:['Hyd']  
      },
      {
        id: 6,
        price: 30,
        name: "veg piza",
        favorite: false,
        star: 4.8,
        tags: ['fastfood','piza','lunch'],
        imageUrl: '/assets/Images/06.jpg',
        cookTime: '10-15',
        origins:['uk']  
      },
      {
        id: 7,
        price: 50,
        name: " Tea",
        favorite: false,
        star: 4.8,
        tags: ['fastfood','piza','lunch'],
        imageUrl: '/assets/Images/05.jpg',
        cookTime: '10-15',
        origins:['uk']  
      },
      {
        id: 8,
        price: 60,
        name: "Coffie",
        favorite: false,
        star: 4.8,
        tags: ['fastfood','piza','lunch'],
        imageUrl: '/assets/Images/08.jpg',
        cookTime: '10-15',
        origins:['uk']  
      }
    ]
  }



}



