import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../../interfaces/dashboard/user';
import { Observable } from 'rxjs';
import AuthCredential = firebase.auth.AuthCredential;
import { filter, map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;
  user: any

  constructor(public afs: AngularFirestore,
    private afAuth: AngularFireAuth,
  ) {
    // this.users = this.afs.collection('users').valueChanges();

    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('email', 'asc'));


    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  deleteuserid(id) {
    // swal({
    //   title: "คุณแน่ใจหรือไม่",
    //   text: "เมื่อลบแล้วคุณจะไม่สามารถกู้คืนข้อมูลนี้ได้",
    //   icon: "warning",
    //   buttons: ['กลับ', 'ยืนยัน'],
    //   dangerMode: true,
    // })
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       this.afs.firestore.collection('users').doc(id).delete().then(() => { });
    //       swal("ข้อมูลของคุณถูกลบแล้ว", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("ข้อมูลของคุณปลอดภัย");
    //     }
    //   }).catch(() => {
    //     swal("ล้มเหลว", "กรุณาตรวจสอบอีกครั้ง", "error");
    //   })

    swal({
      title: 'คุณแน่ใจหรือไม่',
      text: "เมื่อลบแล้วคุณจะไม่สามารถกู้คืนข้อมูลนี้ได้",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'ไม่, ออก',
      confirmButtonText: 'ใช่, ฉันจะลบ'
    }).then((result) => {
      if (result.value) {
        this.afs.firestore.collection('users').doc(id).delete().then(() => { });
        swal(
          'ข้อมูลของคุณถูกลบแล้ว!',
          '',
          'success'
        )
      }
    })

  }

  getalluser() {
    this.usersCollection = this.afs.collection('users');
    this.user = this.usersCollection.snapshotChanges()
    return this.user
  }

  getUsers() {
    return this.users;
  }

  getUser(id) {
    this.userDoc = this.afs.doc(`users/${id}`);
    return this.userDoc.valueChanges();
  }

  addUser(user: User) {
    return this.usersCollection.add(user);  // need return for async logout call in register process!
  }

  setUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    return this.userDoc.set(user, { merge: true });
  }

  setUserMerge(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.id}`);
    const data: User = {
      downloadUrl: 'xxx',
      area: 'luzernXXX'
    };
    return userRef.set(data, { merge: true });
  }

  deleteUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

  updateUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);

  }

  // LocalStorage Functions start
  setUserToLocalStorage(userFromDatabase) {
    localStorage.setItem('user', JSON.stringify(userFromDatabase));
  }

  destroyUserLocalStorage() {
    localStorage.removeItem('user');
  }

  getProfileFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user')) || [];
  }

  get authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  get currentUserId(): any {
    return this.authenticated ? this.afAuth.auth.currentUser.uid : null;
  }

}