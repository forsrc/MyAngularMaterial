import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';


import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { UserService } from '../service/user.service';
import { DialogConfirmedComponent } from '../dialog-confirmed/dialog-confirmed.component';

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
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    DialogConfirmedComponent
  ],
  providers: [UserService],
  entryComponents: [UserComponent, DialogConfirmedComponent]
})
export class UserModule {
}
