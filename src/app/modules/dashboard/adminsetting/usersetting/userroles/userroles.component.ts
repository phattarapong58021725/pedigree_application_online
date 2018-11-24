import {Component, OnInit, Inject, ViewChild } from '@angular/core';
import { User } from '../../../../../interfaces/dashboard/user';
import { AuthService } from '../../../../../services/dashboard/auth.service';
import { UserService } from '../../../../../services/dashboard/user.service';
import {StorageService} from '../../../../../shared/storage.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import swal from 'sweetalert2'
import { Observable, of } from 'rxjs';

export interface Role1 {
  value: boolean;
  viewValue: string;
}

export interface Role2 {
  value2: boolean;
  viewValue2: string;
}

@Component({
  selector: 'app-userroles',
  templateUrl: './userroles.component.html',
  styleUrls: ['./userroles.component.scss']
})
export class UserrolesComponent implements OnInit {
  user: any = {
    id: null,
    fname: "",
    lname: "",
    email:"",
    roles:""
  };

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


  constructor(private authService: AuthService,private afs: AngularFirestore,
     private userService: UserService,
      private storageService: StorageService,
       public dialogRef: MatDialogRef<UserrolesComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any = null) {

      if (data) {
          this.user = data
      }
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

  getUser() {
    console.log(this.user.uid);
    this.localStorageUser = this.userService.getProfileFromLocalStorage();
    return this.userService.getUser(this.user.uid)
      .subscribe( data => {
        console.log('singleUser: ', data);
        this.user = data;
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
}

changeView(type) {
  this.dataView = type
}
  
  updateuser() {
    this.userService.updateUser(this.user)
    swal('เปลี่ยนสถานะสำเร็จ', '', 'success')
}

onChange(event) {
  let value = event.target.value
  let name = event.target.name
  this.user[name] = value
}


  onFileSelection($event) {
    this.storageService.upload($event)
      .then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
        uploadSnapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          this.imageUrl = downloadURL;
          const data: User = {
            id: this.user.uid,
            downloadUrl: downloadURL,
          };
          this.userService.setUser(data);

        });

    });

  }

  selectedValue: boolean;
  selectedValue2: boolean;

  role1s: Role1[] = [
    {value: true, viewValue: 'เปิดสถานะพนักงาน'},
    {value: false, viewValue: 'ปิดสถานะพนักงาน'}
  ];

  role2s: Role2[] = [
    {value2: true, viewValue2: 'เปิดสถานะสมาชิก'},
    {value2: false, viewValue2: 'ปิดสถานะสมาชิก'}
  ];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}



}
