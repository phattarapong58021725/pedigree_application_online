import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { Observable, of } from 'rxjs';
import { User } from '../../../../interfaces/dashboard/user';
import { UserService } from '../../../../services/dashboard/user.service';
import { AuthService } from '../../../../services/dashboard/auth.service';
import { UserrolesComponent } from '../../adminsetting/usersetting/userroles/userroles.component';
@Component({
  selector: 'app-usersetting',
  templateUrl: './usersetting.component.html',
  styleUrls: ['./usersetting.component.scss']
})
export class UsersettingComponent implements OnInit {

  user;
  user2;
  imageUrl;
  localStorageUser;

  displayedColumns = ['id',
  'fname',
  'lname',
  'email',
  'roles',
  'actions'
  ];
  dataSource: MatTableDataSource<User[]>;
  items: Observable<any[]>;
  dataView = "table"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public userService:UserService,public dialog: MatDialog) { }

  openDialog(dataToUpdate: any = null): void {
    let dialogRef = this.dialog.open(UserrolesComponent, {
      height: 'auto',
      width: '500px',
      data: dataToUpdate != null ? dataToUpdate : null
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  ngOnInit() {
    this.userService.getalluser().subscribe(users => {
      let datas = users.map((user) => {
        return ({ id: user.payload.doc.id, ...user.payload.doc.data() })
      })
      console.log(" ngOnInit() users ", datas)
      this.dataSource = new MatTableDataSource(datas);
    })
  }

  changeView(type) {
    this.dataView = type
  }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteuserid(userId) {
    this.userService.deleteuserid(userId)
  }

}
