import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:"courses",
  //   loadChildren:() =>
  //   import("./courses/courses.module").then(m) => m.CoursesModule),
  // },

  // {
  //   path:"payments",
  //   loadChildren:() =>
  //   import("./payments/payments.module").then(m) => m.PaymentsModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  path: any;
  n : any;
}
