import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponentsModule } from '../app/dashboard-components/dashboard-components.module'
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardcomponentsModule } from './admindashboardcomponents/admindashboardcomponents.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    DashboardComponentsModule,
    MatTableModule,
    MatFormFieldModule,
    AdminModule,
    HttpClientModule,
    AdmindashboardcomponentsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
