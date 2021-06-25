import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { User } from '../../shared/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.scss']
})
export class UserEditDialogComponent implements OnInit {

  title!: string;
  user!: User;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,
    public dialogRef: MatDialogRef<UserEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.title = this.data.title;
    this.user = this.data.user;

  }

  submit() {

  }
}
