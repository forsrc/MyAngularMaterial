import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { UserEditDialogComponent } from './user-edit-dialog.component';

const routes: Routes = [
  {
    path: '/',
    component: UserEditDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEditRoutingModule {
}
