import { Component, Input, ViewChild, OnInit  } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../interfaces/dashboard/user';
import { AuthService } from '../../services/dashboard/auth.service';
import { UserService } from '../../services/dashboard/user.service';
import { StorageService } from './../../shared/storage.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, RouterModule } from '@angular/router';
import swal from 'sweetalert2'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    @Input()
    user: any
    constructor(
        private breakpointObserver: BreakpointObserver,
        public authService: AuthService,
        private router: Router,
        private afs: AngularFirestore,
        private userService: UserService,
        private storageService: StorageService
    ) { }


  user2;
  imageUrl;
  localStorageUser;

   
    ngOnInit() {

        this.user = this.authService.getAuthUser();
        this.getUser();

        this.authService.getCurrentUser().subscribe(auth => {
            if (!auth) {
                this.router.navigate(['/login'])
            }
            console.log(auth)
            this.user = auth
        })
    }
    goTo(name) {
        this.router.navigateByUrl(name)
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
