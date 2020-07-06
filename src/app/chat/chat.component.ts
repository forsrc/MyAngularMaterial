import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';

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
