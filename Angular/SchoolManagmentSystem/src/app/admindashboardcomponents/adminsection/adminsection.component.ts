import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  name: string;
  Father_Name: string;
  Phone_Number: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Eshwar', Father_Name: 'Gopikrishna', Phone_Number: 9908272275},
  {position: 2, name: 'Madan', Father_Name: 'XXXXXX', Phone_Number: 425384623},
  {position: 3, name: 'Ramakanth', Father_Name: 'XXXXXXX', Phone_Number: 6374983879},
  {position: 4, name: 'mohan', Father_Name: 'ABCD', Phone_Number: 1236544789},
  {position: 5, name: 'Jaya', Father_Name: 'zxcv', Phone_Number: 545242},
  {position: 6, name: 'Kiran', Father_Name: 'ABCD', Phone_Number: 545242},
  {position: 7, name: 'Chandhu', Father_Name: 'zxcv', Phone_Number: 545242},
  {position: 8, name: 'Sayad', Father_Name: 'ABCD', Phone_Number: 545242},
  {position: 9, name: 'Puneeth', Father_Name: 'zxcv', Phone_Number: 545242},
];

@Component({
  selector: 'app-adminsection',
  templateUrl: './adminsection.component.html',
  styleUrls: ['./adminsection.component.css']
})
export class AdminsectionComponent implements OnInit {

  
  displayedColumns: string[] = ['position', 'name', 'Father_Name', 'Phone_Number'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
