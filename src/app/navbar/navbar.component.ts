import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


}

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    CommonModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
})
export class NavBarModule {
}
