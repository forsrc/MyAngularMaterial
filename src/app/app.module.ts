import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

import {OAuth2Service} from './service/oauth.service';
import {NavBarModule} from './navbar/navbar.module';
import {FooterModule} from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,

    NavBarModule,
    FooterModule,
  ],
  providers: [OAuth2Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
