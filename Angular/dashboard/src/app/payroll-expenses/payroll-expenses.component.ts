import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll-expenses',
  templateUrl: './payroll-expenses.component.html',
  styleUrls: ['./payroll-expenses.component.css']
})
export class PayrollExpensesComponent implements OnInit {

  constructor() { }

  myimage:string = "assets/images/payroll1.png"
  myimage1:string = "assets/images/payroll2.png"
  myimage2:string = "assets/images/payroll3.png"
  myimage3:string = "assets/images/payroll4.jpg"
  myimage4:string = "assets/images/payroll5.jpg"
  myimage5:string = "assets/images/payroll6.jpg"
  myimage6:string = "assets/images/payroll7.jpg"
  myimage7:string = "assets/images/payroll8.jpg"
  myimage8:string = "assets/images/payroll9.jpg"
  myimage9:string = "assets/images/payroll10.jpg"
  ngOnInit(): void {
  }

}
