import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { StudentTableComponent } from '../dashboard-components/student-table/student-table.component';
import {MatTableModule} from '@angular/material/table';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFeeComponent } from './student-fee/student-fee.component';
import { StudentAttandanceComponent } from './student-attandance/student-attandance.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentFooterComponent } from './student-footer/student-footer.component';
import { RouterModule} from '@angular/router';
import { StudentExamsComponent } from './student-exams/student-exams.component';
import { StudentUploadphotoComponent } from './student-uploadphoto/student-uploadphoto.component';
import { StudentSearchBooksComponent } from './student-search-books/student-search-books.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentTableComponent,
    StudentDetailsComponent,
    StudentFeeComponent,
    StudentAttandanceComponent,
    StudentProfileComponent,
    StudentHeaderComponent,
    StudentFooterComponent,
    StudentExamsComponent,
    StudentUploadphotoComponent,
    StudentSearchBooksComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    RouterModule
  ],
  exports:[
    StudentsComponent,
    StudentTableComponent,
    StudentDetailsComponent
  ]
})
export class DashboardComponentsModule {

 }
