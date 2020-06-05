import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any = [];
  displayedColumns: string[] = ['index', 'username', 'role'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private router: Router, private userService: UserService) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    this.userService.list().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginator;
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })

  }

  onLogin() {
    //localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/user']);
  }
}
