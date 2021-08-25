import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ChatModule } from './chat/chat.module';
import { DemoModule } from './demo/demo.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { TableModule } from './table/table.module';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user-role/user-role.module';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    //loadChildren: './home/home.module#HomeModule'
    loadChildren: () => HomeModule
  },
  {
    path: 'home',
    // component: HomeComponent,
    // loadChildren: './home/home.module#HomeModule'
    loadChildren: () => HomeModule
  },
  {
    path: 'login',
    // component: LoginComponent,
    // loadChildren: './login/login.module#LoginModule'
    loadChildren: () => LoginModule
  },
  {
    path: 'logout',
    // component: LoginComponent,
    // loadChildren: './login/login.module#LoginModule'
    loadChildren: () => LoginModule
  },
  {
    path: 'demo',
    // component: DemoComponent,
    // loadChildren: './demo/demo.module#DemoModule'
    loadChildren: () => DemoModule
  },
  {
    path: 'user',
    // component: UserComponent,
    // loadChildren: './user/user.module#UserModule'
    loadChildren: () => UserModule
  },
  {
    path: 'user-role',
    // component: UserComponent,
    // loadChildren: './user/user.module#UserModule'
    loadChildren: () => UserRoleModule
  },
  {
    path: 'table',
    // component: TableComponent,
    // loadChildren: './table/table.module#TableModule'
    loadChildren: () => TableModule
  },
  {
    path: 'chat',
    // component: DemoComponent,
    // loadChildren: './chat/chat.module#ChatModule'
    loadChildren: () => ChatModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
