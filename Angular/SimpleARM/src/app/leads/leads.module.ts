import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsGridComponent } from './leads-grid/leads-grid.component';
import { LeadsToolsComponent } from './leads-tools/leads-tools.component';
import { DownloadExcelComponent } from './leads-tools/download-excel/download-excel.component';
import { DownloadPdfComponent } from './leads-tools/download-pdf/download-pdf.component';



@NgModule({
  declarations: [
    LeadsListingComponent,
    LeadsGridComponent,
    LeadsToolsComponent,
    DownloadExcelComponent,
    DownloadPdfComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
