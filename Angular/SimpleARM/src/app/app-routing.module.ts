import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './loans/add-loans/add-loans.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'search',component:SearchComponent },
  { path:'product/:productid/photo/:photoid',component:ProductComponent},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
