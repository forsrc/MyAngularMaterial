import {Component} from '@angular/core';
import {OAuth2Service} from './service/oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularMaterial';

  constructor(public oauth2: OAuth2Service) {
  }
}
