import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';


import { User } from '../shared/user';
import { UserService } from '../service/user.service';
import { DialogConfirmedComponent } from '../dialog-confirmed/dialog-confirmed.component';

@Component({
  selector: 'app-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any = [];
  displayedColumns: string[] = ['index', 'username', 'role', 'action'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private router: Router, private userService: UserService, public dialog: MatDialog) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    this.userService.list().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource<User>(this.users);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 0);
    })

  }

  onLogin() {
    //localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/user']);
  }

  delete(user: User): void {
    // Create configuration for the dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '200px';
    dialogConfig.width = '400px';
    dialogConfig.data = {
      title: "Delete",
      key: user.username,
      message: 'Are you sure?'
    };

    const dialogRef = this.dialog.open(DialogConfirmedComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      //console.log("dialogRef.afterClosed()", result)
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(e => e.username !== user.username);
        //this.userServicr.delete(user.username).subscribe();
      }
    });
  }

  edit(user: User): void {

  }
}
