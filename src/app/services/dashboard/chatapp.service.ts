import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, count } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { SnackBarMessageComponent } from '../../helpers/snack-bar-message/snack-bar-message.component'
import { AuthService } from '../../services/dashboard/auth.service'
import { Chat } from '../../interfaces/dashboard/chat';

@Injectable({
    providedIn: 'root'
})
export class ChatappService {
    @Input()
    chatappCollection: AngularFirestoreCollection<any[]>;
    chatapps: Observable<any>
    durationSback: number = 4000
    chat: any

    constructor(
        private db: AngularFirestore,
        public snackBar: MatSnackBar,
        public authService: AuthService
    ) { }

    getListChat() {
        this.chatappCollection = this.db.collection('chatapp', ref => ref.where('uid', '==', this.authService.getUserId()))
        this.chatapps = this.chatappCollection.snapshotChanges()
        return this.chatapps
    }

    // getListChatsall() {
    //     this.chatappCollection = this.db.collection('chatapps')
    //     this.chatapps = this.chatappCollection.snapshotChanges()
    //     return this.chatapps
    // }
    
    saveChat(data) {
        if (data.inchat == "") {
            this.showSnack({ message: "Title or Import is empty!", type: "error" })
        } else {
            this.authService.getCurrentUserId(uid => {
                let dataToSave: any = {
                    namechat: data.namechat,
                    inchat: data.inchat,
                    datechat: data.datechat,
                    uid: uid
                }
                this.chatappCollection.add(dataToSave).then(() => {
                    this.showSnack({ message: "Orders saved succesfully", type: "success" })
                }).catch(() => {
                    this.showSnack({ message: "Error, Please check again", type: "error" })
                })
            })

        }
    }
    updateChat(data) {

        if (data.inchat == "") {
            this.showSnack({ message: "Title or Import is empty!", type: "error" })
        } else {
            this.authService.getCurrentUserId(uid => {
                let dataToUpdate: any = {
                    namechat: data.namechat,
                    inchat: data.inchat,
                    datechat: data.datechat,
                    uid: uid
                }

                this.chatappCollection.doc(data.id).update(dataToUpdate).then(() => {
                    this.showSnack({ message: "Record updated succesfully", type: "success" })
                }).catch(() => {
                    this.showSnack({ message: "Error, Please check again", type: "error" })
                })
            })

        }
    }

    deleteChat(id) {
        this.db.firestore.collection('chatapps').doc(id).delete().then(() => {
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
