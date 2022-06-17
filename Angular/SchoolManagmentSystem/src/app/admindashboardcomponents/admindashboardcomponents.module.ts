import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsectionComponent } from './adminsection/adminsection.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FeeCollectionComponent } from './fee-collection/fee-collection.component';
import { ExaminationComponent } from './examination/examination.component';
import { LogInDashBoardComponent } from './log-in-dash-board/log-in-dash-board.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { AccountsComponent } from './accounts/accounts.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AdminsectionComponent,
    StudentinfoComponent,
    TeachersComponent,
    FeeCollectionComponent,
    ExaminationComponent,
    HeaderComponent,
    LogInDashBoardComponent,
    FooterComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports:[
    AdminsectionComponent,
    StudentinfoComponent,
    TeachersComponent,
    FeeCollectionComponent,
    ExaminationComponent,
    HeaderComponent,
    LogInDashBoardComponent,
    FooterComponent,
    AccountsComponent
  ]
})
export class AdmindashboardcomponentsModule { }
