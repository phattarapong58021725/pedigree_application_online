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
import swal from 'sweetalert2'
import { AuthService } from '../../services/dashboard/auth.service'
import { Address } from '../../interfaces/dashboard/address'

@Injectable({
  providedIn: 'root'
})
export class AddressmemberService {
  @Input()
  addressmemberCollection: AngularFirestoreCollection<any[]>;
  addressmembers: Observable<any>
  durationSback: number = 4000
  user: any
  constructor(
      private db: AngularFirestore,
      public authService: AuthService,
  ) { }

  getListAddressmambers() {
    this.addressmemberCollection = this.db.collection('addressmembers', ref => ref.where('uid', '==', this.authService.getUserId()))
    this.addressmembers = this.addressmemberCollection.snapshotChanges()
    return this.addressmembers
}

  saveAddressmamber(data) {
    if (data.membernameTH == "" || data.membernameEN == "" || data.member_address == "" || data.member_tel == "" || data.member_ID == "" || data.farm_Name == ""
        || data.farm_Logo == "" || data.shippingaddress=="") {
            swal(
                'กรุณากรอกข้อมูล',
                'กรุณากรอกข้อมูลให้ครบถ้วน',
                'warning'
            )
    } else {
        this.authService.getCurrentUserId(uid => {
            let dataToSave: any = {
                membernameTH: data.membernameTH,
                membernameEN: data.membernameEN,
                member_address: data.member_address,
                member_tel: data.member_tel,
                member_ID: data.member_ID,
                farm_Name: data.farm_Name,
                farm_Logo: data.farm_Logo,
                shippingaddress: data.shippingaddress,
                uid: uid
            }
            this.addressmemberCollection.add(dataToSave).then(() => {
                swal('บันทึกสำเร็จ', '', 'success')
            }).catch(() => {
                swal('บันทึกล้มเหลว', 'กรุณาใส่ข้อมูลให้ครบถ้วน', 'error');
            })
        })

    }
}

updateAddressmamber(data) {
  if (data.membernameTH == "" || data.membernameEN == "" || data.member_address == "" || data.member_tel == "" || data.member_ID == "" || data.farm_Name == ""
      || data.farm_Logo == ""|| data.shippingaddress=="" ) {
        swal(
            'กรุณากรอกข้อมูล',
            'กรุณากรอกข้อมูลให้ครบถ้วน',
            'warning'
        )
  } else {
      this.authService.getCurrentUserId(uid => {
          let dataToUpdate: any = {
              membernameTH: data.membernameTH,
              membernameEN: data.membernameEN,
              member_address: data.member_address,
              member_tel: data.member_tel,
              member_ID: data.member_ID,
              farm_Name: data.farm_Name,
              farm_Logo: data.farm_Logo,
              shippingaddress:data.shippingaddress,
              uid: uid
          }

          this.addressmemberCollection.doc(data.id).update(dataToUpdate).then(() => {
            swal('แก้ไขสำเร็จ', '', 'success')
          }).catch(() => {
            swal('แก้ไขล้มเหลว', 'กรุณาใส่ข้อมูลให้ครบถ้วน', 'error')
          })
      })

  }
}

getListAddressmambersByKey(key) {
    this.addressmemberCollection = this.db.collection('addressmembers', ref => ref.where('uid', '==', key))
    this.addressmembers = this.addressmemberCollection.snapshotChanges()
    return this.addressmembers
}

deleteAddressmamber(id) {
//   swal({
//       title: "คุณแน่ใจหรือไม่",
//       text: "เมื่อลบแล้วคุณจะไม่สามารถกู้คืนข้อมูลนี้ได้",
//       icon: "warning",
//       buttons : ['กลับ', 'ยืนยัน'],
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//           this.db.firestore.collection('addressmembers').doc(id).delete().then(() => {});
//         swal("ข้อมูลของคุณถูกลบแล้ว", {
//           icon: "success",
//         });
//       } else {
//         swal("ข้อมูลของคุณปลอดภัย");
//       }
//   }).catch(() => {
//       swal("ล้มเหลว", "กรุณาตรวจสอบอีกครั้ง", "error");
//   })

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
        this.db.firestore.collection('addressmembers').doc(id).delete().then(() => {});
        swal(
            'ข้อมูลของคุณถูกลบแล้ว!',
            '',
            'success'
        )
    }
})

 }

 /**
       * 
       * @param data The data to pass to the snackKomponent
       * @param time the duration
       */

       
}
