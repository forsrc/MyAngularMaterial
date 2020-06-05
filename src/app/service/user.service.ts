import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  endpoint: string = 'http://127.0.0.1:4200/assets/json/user.json';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${this.endpoint}`);
  }

}