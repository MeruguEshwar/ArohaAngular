import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './loans/add-loans/add-loans.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    AddLoansComponent,
    P1Component,
    P2Component,
    ProductComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
