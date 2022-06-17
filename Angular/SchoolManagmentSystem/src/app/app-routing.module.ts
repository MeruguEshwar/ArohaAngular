import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './admindashboardcomponents/header/header.component';
import { LoginComponent } from '../app/admin/login/login.component';
import { LogInDashBoardComponent } from './admindashboardcomponents/log-in-dash-board/log-in-dash-board.component';
import { StudentsComponent } from './dashboard-components/students/students.component';
import { StudentTableComponent } from './dashboard-components/student-table/student-table.component';
import { StudentDetailsComponent } from './dashboard-components/student-details/student-details.component';
import { SignupComponent } from '../app/admin/signup/signup.component';
import { StudentFeeComponent } from './dashboard-components/student-fee/student-fee.component';
import { StudentAttandanceComponent } from './dashboard-components/student-attandance/student-attandance.component';
import { StudentHeaderComponent } from './dashboard-components/student-header/student-header.component';
import { StudentFooterComponent } from './dashboard-components/student-footer/student-footer.component';
import { StudentProfileComponent } from './dashboard-components/student-profile/student-profile.component';
import { StudentExamsComponent } from './dashboard-components/student-exams/student-exams.component';
import { StudentSearchBooksComponent } from './dashboard-components/student-search-books/student-search-books.component';
import { StudentUploadphotoComponent } from './dashboard-components/student-uploadphoto/student-uploadphoto.component';


import { AdminsectionComponent } from './admindashboardcomponents/adminsection/adminsection.component';
import { ExaminationComponent } from './admindashboardcomponents/examination/examination.component';
import { FeeCollectionComponent } from './admindashboardcomponents/fee-collection/fee-collection.component';
import { StudentinfoComponent } from './admindashboardcomponents/studentinfo/studentinfo.component';
import { TeachersComponent } from './admindashboardcomponents/teachers/teachers.component';
import { AccountsComponent } from './admindashboardcomponents/accounts/accounts.component';

const routes: Routes = [
  { path: '',redirectTo:'HeaderComponent', pathMatch: 'full'},
  { path: 'header',component:HeaderComponent},
  { path: 'login',component:LoginComponent },
  { path: 'signup',component:SignupComponent },
  { path:'loginDashboard',component:LogInDashBoardComponent },
  { path:'student',component:StudentsComponent},
  { path:'student-table',component:StudentTableComponent},
  { path:'student-details',component:StudentDetailsComponent},
  { path:'student-fee',component:StudentFeeComponent},
  { path:'student-header',component:StudentHeaderComponent },
  { path:'student-footer',component:StudentFooterComponent },
  { path:'student-profile',component:StudentProfileComponent},
  { path:'student-attandance',component:StudentAttandanceComponent },
  { path:'student-exams',component:StudentExamsComponent },
  { path:'student-photo',component:StudentUploadphotoComponent },
  { path:'student-search',component:StudentSearchBooksComponent },

  { path:'adminsection',component:AdminsectionComponent },
  { path:'examination',component:ExaminationComponent },
  { path:'feecollection',component:FeeCollectionComponent },
  { path:'student-info',component:StudentinfoComponent },
  { path:'teachers',component:TeachersComponent },
  { path:'accounts',component:AccountsComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
