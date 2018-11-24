import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/dashboard/user';
import { AuthService } from '../../../services/dashboard/auth.service';
import { UserService } from '../../../services/dashboard/user.service';
import { StorageService } from './../../../shared/storage.service';
import { AngularFirestore } from 'angularfire2/firestore';
import swal from 'sweetalert2'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private afs: AngularFirestore,
    private userService: UserService,
    private storageService: StorageService) { }

  user;
  user2;
  imageUrl;
  localStorageUser;

  ngOnInit() {
    this.user = this.authService.getAuthUser();
    this.getUser();
  }

  getUser() {
    console.log(this.user.uid);
    this.localStorageUser = this.userService.getProfileFromLocalStorage();
    return this.userService.getUser(this.user.uid)
      .subscribe(data => {
        console.log('singleUser: ', data);
        this.user = data;
      });
  }


  updateuser() {
    this.userService.updateUser(this.user)
    swal('แก้ไขสำเร็จ', '', 'success')
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
}