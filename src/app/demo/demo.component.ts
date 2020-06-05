import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/demo']);
  }
}
