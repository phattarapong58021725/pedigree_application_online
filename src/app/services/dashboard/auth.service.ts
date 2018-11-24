import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../interfaces/dashboard/user';
import swal from 'sweetalert2'
import { UserService } from '../../services/dashboard/user.service';
import { NotificationService } from './../../shared/notification.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

import { MatSnackBar } from '@angular/material';
import { SnackBarMessageComponent } from '../../helpers/snack-bar-message/snack-bar-message.component'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    durationSback: number = 4000
    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    user$: Observable<any>;  // change to Interface User(import), and make observable with user$  (cms project)

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router,
        private userService: UserService,
        private notifier: NotificationService,
        public snackBar: MatSnackBar
    ) {
        // Get Current Auth User
        this.user = afAuth.authState;
        this.user.subscribe(
            (user) => {
                if (user) {
                    this.userDetails = user;
                } else {
                    this.userDetails = null;
                }
            }
        );
        // for Google Switch User
        /*
        this.user$ = afAuth.authState.pipe(switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);  // Angular6 without Observable.of, just of with import {of}
          }
        }));
        */

        this.user$ = afAuth.authState.pipe(map(user => {
            if (user) {
                // debugger;
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            } else {
                return of(null);  // Angular6 without Observable.of, just of with import {of}
            }
        }));
    }

    getUserId(){
        return  this.afAuth.auth.currentUser.uid
    }
    getCurrentAuth(){
        return this.afAuth
    }
    getCurrentUser(){
        return this.afAuth.authState
    }
    getCurrentUserId(callback:Function){
        this.afAuth.authState.subscribe(auth=>{
            callback(auth.uid)
        })
    }
    getAuthUser() {
        return this.userDetails;
    }
    isLoggedIn() {
        if (this.userDetails == null) {
            return false;
        } else {
            return true;
        }
    }

    // 1. Register
    createUserInFirebaseAuthListEmailVerified(email, password, username,fname,lname,gender,ID_card,address,tel,mobile,fax,other_email,member_ID,farm_Name,farm_Logo,farm_address,line,member_type) {
        console.log('vor createUserInFirebaseAuthList->' + email + ' / ' + password);

        const actionCodeSettings = {
            url: 'http://localhost:4200/login',
            handleCodeInApp: true
        };

        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(userData => {
                console.log(userData);
                userData.user.sendEmailVerification(actionCodeSettings);

                const message = `Eine Verification EMail wurde an ${email} geschickt. Bitte prüfen Sie Ihr Posteingang und bestätigen Sie die Registrationsprüfung.`;
                swal('สมัครสมาชิกสำเร็จ', 'กรุณายืนยันข้อมูลอีเมล', 'success')

                const user: User = {
                    id: userData.user.uid,
                    username: username,
                    line: line,
                    member_type:member_type,
                    fname:fname,
                    lname:lname,
                    gender:gender,
                    ID_card:ID_card,
                    address:address,
                    tel:tel,
                    mobile:mobile,
                    fax:fax,
                    other_email:other_email,
                    member_ID: member_ID = "รอการกรอก",           
                    farm_Name :farm_Name,         
                    farm_Logo:farm_Logo ,      
                    farm_address:farm_address,    
                    email: email,
                    anonymous: userData.user.isAnonymous,
                    roles: {
                        authuser: true,
                        admin: false,
                        superadmin: false
                    },
                    registrationDate: new Date(),
                };
                this.userService.setUserToLocalStorage(user);
                this.userService.setUser(user)
                    .then(() => {
                        this.afAuth.auth.signOut();  // erst wenn der Benutzer erfasst wird aus Firebase ausloggen!
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error);
                swal('สมัครสมาชิกล้มเหลว', 'กรุณาเช็คข้อมูลให้ครบถ้วน', 'error');
            });
    }

    // 2. Login
    loginWithUserPassword(email, password) {
        console.log('vor auth.EmailAuthProvider.credential->' + email + ' / ' + password);
        const credential = firebase.auth.EmailAuthProvider.credential(email, password);
        this.router.navigate([ '/dashboard' ]);
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
        
        
    }
    // 3. Reset PW
    resetPassword(email) {

        const actionCodeSettings = {
            url: 'http://localhost:4200/login',
            // This must be true.
            handleCodeInApp: true
        };

        this.afAuth.auth.sendPasswordResetEmail(email, actionCodeSettings)
            .then(data => {
                console.log('Passwort Reset Mail send Successful');
                console.log(data);
                swal('เรียบร้อย', 'ส่งอีเมลการตั้งค่ารหัสผ่านใหม่เรียบร้อยแล้ว', 'success')
                
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 2000);


            }).catch(
                error => {
                    console.log(error);
                    swal('รีเช็ตพาสเวร์สล้มเหลว', 'กรุณาใส่อีเมลครบถ้วน', 'error');
                });
    }

    // 4. Logout
    logout() {
        this.afAuth.auth.signOut()
            .then((res) => this.router.navigate(['login']));
    }
     /**
       * 
       * @param data The data to pass to the snackKomponent
       * @param time the duration
       */
      showSnack(data: any, time: number = null) {

        if (time) {
            this.durationSback = time
        }
        this.snackBar.openFromComponent(SnackBarMessageComponent, {
            duration: this.durationSback,
            data: data,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }
}


