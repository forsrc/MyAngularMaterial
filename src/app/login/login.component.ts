import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = 'forsrc@gmail.com';
  password: string = 'forsrc';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/home']);
  }
}
