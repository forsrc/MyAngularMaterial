import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';

import {MatPaginatorModule} from '@angular/material/paginator';



import {TableRoutingModule} from './table-routing.module';
import {TableComponent} from './table.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    TableRoutingModule,
    MatSortModule
  ],
  declarations: [TableComponent]
})
export class TableModule {
}
