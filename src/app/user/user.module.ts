import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


import { UserRoutingModule } from './user.routing.module';
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
