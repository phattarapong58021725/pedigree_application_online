import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { map, count } from 'rxjs/operators';
import { AuthService } from '../../services/dashboard/auth.service'
import { Setting } from '../../interfaces/dashboard/setting'
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  @Input()
  settingCollection: AngularFirestoreCollection<any[]>;
  settings: Observable<any>
  durationSback: number = 4000
  user: any

  constructor(
    private db: AngularFirestore,
    public authService: AuthService) { }

  getListsettingsall() {
    this.settingCollection = this.db.collection('settings')
    this.settings = this.settingCollection.snapshotChanges()
    return this.settings
  }

  getListSettings() {
    this.settingCollection = this.db.collection('settings', ref => ref.where('uid', '==', this.authService.getUserId()))
    this.settings = this.settingCollection.snapshotChanges()
    return this.settings
  }
  saveSetting(data) {
    if (data.hidden == "") {
      swal(
        'กรุณากรอกข้อมูล',
        'กรุณากรอกข้อมูลให้ครบถ้วน',
        'warning'
      )
    } else {
      this.authService.getCurrentUserId(uid => {
        let dataToSave: any = {
          uid: uid,
          hidden: data.hidden,
          hidden1: data.hidden1,
          hidden2: data.hidden2,
          hidden3: data.hidden3,
          hidden4: data.hidden4,
          hidden5: data.hidden5,
          //   hidden5: data.hidden5,
          //   hidden6: data.hidden6,
          //   hidden7: data.hidden7,
          //   hidden8: data.hidden8,
          cattlename: data.cattlename,
          colors: data.colors
        }
        this.settingCollection.add(dataToSave).then(() => {
          swal('บันทึกสำเร็จ', '', 'success')
        }).catch(() => {
          swal('บันทึกล้มเหลว', 'กรุณาใส่ข้อมูลให้ครบถ้วน', 'error');
        })
      })

    }
  }

  updateSetting(data) {

    if (data.uid == "") {
      swal(
        'กรุณากรอกข้อมูล',
        'กรุณากรอกข้อมูลให้ครบถ้วน',
        'warning'
      )
    } else {
      this.authService.getCurrentUserId(uid => {
        let dataToUpdate: any = {
          uid: uid,
          hidden: data.hidden,
          hidden1: data.hidden1,
          hidden2: data.hidden2,
          hidden3: data.hidden3,
          hidden4: data.hidden4,
          hidden5: data.hidden5,
          hidecol: data.hidecol,
          hidecol1: data.hidecol1,
          hidecol2: data.hidecol2,
          hidecol3: data.hidecol3,
          hidecol4: data.hidecol4,
          hidecol5: data.hidecol5,
          bank : data.bank,
          bank1:data.bank1,
          bank2:data.bank2,
          bank3:data.bank3,
          bank4:data.bank4,
          bookbank:data.bookbank,
          bookbank1:data.bookbank1,
          bookbank2:data.bookbank2,
          bookbank3:data.bookbank3,
          bookbank4:data.bookbank4,
          bookbank_type:data.bookbank_type,
          bookbank_type1:data.bookbank_type1,
          bookbank_type2:data.bookbank_type2,
          bookbank_type3:data.bookbank_type3,
          bookbank_type4:data.bookbank_type4,

          settingbank:data.bank,
          //   hidden5: data.hidden5,
          //   hidden6: data.hidden6,
          //   hidden7: data.hidden7,
          //   hidden8: data.hidden8,
          cattlename: data.cattlename,
          cattlename1: data.cattlename1,
          settingcattle: data.settingcattle,
          colors: data.colors
        }
        this.settingCollection.doc(data.id).update(dataToUpdate).then(() => {
          swal('ตั้งค่าสำเร็จ', '', 'success')
        }).catch(() => {
          swal('ตั้งค่าล้มเหลว', 'กรุณาใส่ลองใหม่', 'error');
        })
      })

    }
  }

  deleteSetting(id) {
    //   swal({
    //       title: "คุณแน่ใจหรือไม่",
    //       text: "เมื่อลบแล้วคุณจะไม่สามารถกู้คืนข้อมูลนี้ได้",
    //       icon: "warning",
    //       buttons : ['กลับ', 'ยืนยัน'],
    //       dangerMode: true,
    //     })
    //     .then((willDelete) => {
    //       if (willDelete) {
    //           this.db.firestore.collection('settings').doc(id).delete().then(() => {});
    //         swal("ข้อมูลของคุณถูกลบแล้ว", {
    //           icon: "success",
    //         });
    //       } else {
    //         swal("ข้อมูลของคุณปลอดภัย");
    //       }
    // }).catch(() => {
    //   swal("ล้มเหลว", "กรุณาตรวจสอบอีกครั้ง", "error");
    // })
    swal({
      title: 'คุณแน่ใจหรือไม่',
      text: "เมื่อลบแล้วคุณจะไม่สามารถกู้คืนข้อมูลนี้ได้",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'ออก',
      confirmButtonText: 'ฉันจะลบ'
    }).then((result) => {
      if (result.value) {
        this.db.firestore.collection('settings').doc(id).delete().then(() => { });
        swal(
          'ข้อมูลของคุณถูกลบแล้ว!',
          '',
          'success'
        )
      }
    })
  }

}
