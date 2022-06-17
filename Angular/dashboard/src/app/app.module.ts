import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewdashComponent } from './newdash/newdash.component';
import { PayrollExpensesComponent } from './payroll-expenses/payroll-expenses.component';
import { ModernHrComponent } from './modern-hr/modern-hr.component';
import { HiringComponent } from './hiring/hiring.component';
import { PerformanceComponent } from './performance/performance.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrefixComponent } from './prefix/prefix.component';
import { NaniPipe } from './nani.pipe';
import { GridexComponent } from './gridex/gridex.component';

@NgModule({
  declarations: [
    AppComponent,
    NewdashComponent,
    PayrollExpensesComponent,
    ModernHrComponent,
    HiringComponent,
    PerformanceComponent,
    ButtonsComponent,
    SliderComponent,
    PrefixComponent,
    NaniPipe,
    GridexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    NgbModule
  ],
  providers: [NaniPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
