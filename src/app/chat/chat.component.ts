import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { QueryList } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('replyForm')
  private _replyForm: NgForm;

  @ViewChild('replyInput')
  private _replyInput: ElementRef;



  private _unsubscribeAll: Subject<any>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }


  ngOnDestroy(): void {

  }

  onLogin() {
    //localStorage.setItem('isLoggedin', 'true');
    //this.router.navigate(['/chat']);
  }

  reply(event): void {
    event.preventDefault();
    alert(this._replyForm.form.value.message);
  }
}
