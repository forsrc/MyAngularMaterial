import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'home',
    // component: HomeComponent,
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'login',
    // component: LoginComponent,
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'logout',
    // component: LoginComponent,
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'demo',
    // component: DemoComponent,
    loadChildren: './demo/demo.module#DemoModule'
  },
  {
    path: 'user',
    // component: UserComponent,
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'table',
    // component: TableComponent,
    loadChildren: './table/table.module#TableModule'
  },
  {
    path: 'chat',
    // component: DemoComponent,
    loadChildren: './chat/chat.module#ChatModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
