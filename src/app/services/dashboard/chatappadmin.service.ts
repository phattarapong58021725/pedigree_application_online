import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, count } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { SnackBarMessageComponent } from '../../helpers/snack-bar-message/snack-bar-message.component'
import { AuthService } from '../../services/dashboard/auth.service'
import { Chatadmin } from '../../interfaces/dashboard/chatadmin';

@Injectable({
  providedIn: 'root'
})
export class ChatappadminService {
  @Input()
  chatappadminCollection: AngularFirestoreCollection<any[]>;
  chatappadmins: Observable<any>
  durationSback: number = 4000
  chatadmin: any


  constructor(
    private db: AngularFirestore,
    public snackBar: MatSnackBar,
    public authService: AuthService
  ) { }

  getListChatadmin() {
    this.chatappadminCollection = this.db.collection('chatappadmin', ref => ref.where('uid', '==', this.authService.getUserId()))
    // this.chatappadminCollection = this.db.collection('chatappadmin', ref => ref.orderBy('datechatadmin', 'asc'))
    this.chatappadmins = this.chatappadminCollection.snapshotChanges()
    return this.chatappadmins
  }
  // getListChatadminsall() {
  //   this.chatappadminCollection = this.db.collection('chatappadmins')
  //   this.chatappadmins = this.chatappadminCollection.snapshotChanges()
  //   return this.chatappadmins
  // }

  saveChatadmin(data) {
    if (data.inchatadmin == "") {
      this.showSnack({ message: "Title or Import is empty!", type: "error" })
    } else {
      this.authService.getCurrentUserId(uid => {
        let dataToSave: any = {
          namechatadmin: data.namechatadmin,
          inchatadmin: data.inchatadmin,
          datechatadmin: data.datechatadmin,
          uid: uid
        }
        this.chatappadminCollection.add(dataToSave).then(() => {
          this.showSnack({ message: "Orders saved succesfully", type: "success" })
        }).catch(() => {
          this.showSnack({ message: "Error, Please check again", type: "error" })
        })
      })

    }
  }

  updateChatadmin(data) {

    if (data.inchatadmin == "") {
      this.showSnack({ message: "Title or Import is empty!", type: "error" })
    } else {
      this.authService.getCurrentUserId(uid => {
        let dataToUpdate: any = {
          namechatadmin: data.namechatadmin,
          inchatadmin: data.inchatadmin,
          datechatadmin: data.datechatadmin,
          uid: uid
        }

        this.chatappadminCollection.doc(data.id).update(dataToUpdate).then(() => {
          this.showSnack({ message: "Record updated succesfully", type: "success" })
        }).catch(() => {
          this.showSnack({ message: "Error, Please check again", type: "error" })
        })
      })

    }
  }

  deleteChatadmin(id) {
    this.db.firestore.collection('chatappadmins').doc(id).delete().then(() => {
      this.showSnack({ message: "Order deleted succesfully", type: "success" })
    }).catch(() => {
      this.showSnack({ message: "Error, Please check again", type: "error" })
    })
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
