import { Injectable } from '@angular/core';


@Injectable()
export class MyService {

  products = 
        [
      {"id":1,"company":"Apple","price":75000,"Model":'iphone'},
      {"id":2,"company":"Samsung","price":5000,"Model":'j7'},
      {"id":3,"company":"One Plus","price":7000,"Model":'Nord'},
      {"id":4,"company":"Vivo","price":15000,"Model":'V7'}
   ]
  
 
  constructor() { }
}

