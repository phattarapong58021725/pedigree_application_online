import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import {
    AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection
} from 'angularfire2/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { map, count, refCount } from 'rxjs/operators';
import swal from 'sweetalert2'
import { AuthService } from '../../services/dashboard/auth.service'
import { Record } from '../../interfaces/dashboard/record'
import * as firebase from 'firebase';
import { AngularFireStorage } from 'angularfire2/storage';



@Injectable({
    providedIn: 'root'
})


export class RecordService {
    @Input()
    recordsCollection: AngularFirestoreCollection<any[]>;
    records: Observable<any>
    durationSback: number = 4000
    user: any
    constructor(
        private db: AngularFirestore,
        public authService: AuthService,
        private afStorage: AngularFireStorage,
    ) { }


    getListRecords() {
        this.recordsCollection = this.db.collection('records', ref => ref .where('uid', '==', this.authService.getUserId())),
        // this.recordsCollection = this.db.collection('records',ref=>ref.orderBy('date_of_record','asc'));
        this.records = this.recordsCollection.snapshotChanges()
       
        return this.records
    }
    saveRecord(data) {
        if (data.cattle_Id == "" || data.cattle_Name == "" || data.sex == "" || data.color == "" || data.breeding == "" || data.birth_weight == "" || data.birth_chert == "" ||
            data.wean_weight == "" || data.hip_height == "" || data.fa_Name == "" || data.fa_Id == "" || data.ma_Name == "" || data.ma_Id == "" || data.breeder == ""
            || data.owner_name == "") {
            // swal("กรุณาใส่ข้อมูล", "กรุณาใส่ข้อมูลให้ครบถ้วน", "warning");
            swal(
                'กรุณากรอกข้อมูล',
                'กรุณากรอกข้อมูลให้ครบถ้วน',
                'warning'
            )
        } else {
            this.authService.getCurrentUserId(uid => {
                let dataToSave: any = {
                    cattle_Id: data.cattle_Id,
                    cattle_Name: data.cattle_Name,
                    date_of_birth: data.date_of_birth,
                    sex: data.sex,
                    color: data.color,
                    breeding: data.breeding,
                    birth_weight: data.birth_weight,
                    birth_chert: data.birth_chert,
                    date_of_wean: data.date_of_wean,
                    wean_weight: data.wean_weight,
                    wean_chert: data.wean_chert,
                    hip_height: data.hip_height,
                    fa_Name: data.fa_Name,
                    fa_Id: data.fa_Id,
                    ma_Name: data.ma_Name,
                    ma_Id: data.ma_Id,
                    breeder: data.breeder,
                    owner_name: data.owner_name,
                    date_of_record:data.date_of_record,
                    image_name: data.image_name,
                    blood_type:data.blood_type,
                    breed:data.breed,
                    uid: uid
                }
                this.recordsCollection.add(dataToSave).then(() => {
                    // swal("บันทึกสำเร็จ", "", "success");
                    swal('บันทึกสำเร็จ', '', 'success')
                }).catch(() => {
                    swal('บันทึกล้มเหลว', 'กรุณาใส่ข้อมูลให้ครบถ้วน', 'error');
                })
            })

        }
    }
    updateRecord(data) {

        if (data.cattle_Id == "" || data.cattle_Name == "" || data.sex == "" || data.color == "" || data.breeding == "" || data.birth_weight == "" || data.birth_chert == ""
            || data.wean_weight == "" || data.hip_height == "" || data.fa_Name == "" || data.fa_Id == "" || data.ma_Name == "" || data.ma_Id == "" || data.breeder == ""
            || data.owner_name == "") {
            swal(
                'กรุณากรอกข้อมูล',
                'กรุณากรอกข้อมูลให้ครบถ้วน',
                'warning'
            )
        } else {
            this.authService.getCurrentUserId(uid => {
                let dataToUpdate: any = {
                    cattle_Id: data.cattle_Id,
                    cattle_Name: data.cattle_Name,
                    date_of_birth: data.date_of_birth,
                    sex: data.sex,
                    color: data.color,
                    breeding: data.breeding,
                    birth_weight: data.birth_weight,
                    birth_chert: data.birth_chert,
                    date_of_wean: data.date_of_wean,
                    wean_weight: data.wean_weight,
                    wean_chert: data.wean_chert,
                    hip_height: data.hip_height,
                    fa_Name: data.fa_Name,
                    fa_Id: data.fa_Id,
                    ma_Name: data.ma_Name,
                    ma_Id: data.ma_Id,
                    breeder: data.breeder,
                    owner_name: data.owner_name,
                    date_of_record:data.date_of_record,
                    image_name: data.image_name,
                    blood_type:data.blood_type,
                    breed:data.breed,
                    uid: uid
                }

                this.recordsCollection.doc(data.id).update(dataToUpdate).then(() => {
                    // swal("แก้ไขสำเร็จ", "", "success");
                    swal('แก้ไขสำเร็จ', '', 'success')
                }).catch(() => {
                    swal('แก้ไขล้มเหลว', 'กรุณาใส่ข้อมูลให้ครบถ้วน', 'error');
                })
            })

        }
    }


    deleteRecord(id) {
        //     swal({
        //         title: "คุณแน่ใจหรือไม่",
        //         text: "เมื่อลบแล้วคุณจะไม่สามารถกู้คืนข้อมูลนี้ได้",
        //         icon: "warning",
        //         buttons : ['กลับ', 'ยืนยัน'],
        //         dangerMode: true,
        //       })
        //       .then((willDelete) => {
        //         if (willDelete) {
        //             this.db.firestore.collection('records').doc(id).delete().then(() => {});
        //           swal("ข้อมูลของคุณถูกลบแล้ว", {
        //             icon: "success",
        //           });
        //         } else {
        //           swal("ข้อมูลของคุณปลอดภัย");
        //         }
        // }).catch(() => {
        //     swal("ล้มเหลว", "กรุณาตรวจสอบอีกครั้ง", "error");
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
                this.db.firestore.collection('records').doc(id).delete().then(() => { });
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

    setUserToLocalStorage(recordFromDatabase) {
        localStorage.setItem('records', JSON.stringify(recordFromDatabase));
      }
    
      destroyRecordLocalStorage() {
        localStorage.removeItem('records');
      }
    
      getRecordFromLocalStorage() {
        return JSON.parse(localStorage.getItem('records')) || [];
      }

      setUserMerge(record: any) {
        const userRef: AngularFirestoreDocument<any> = this.db.doc(`records/${record.id}`);
        const data: any = {
          downloadUrl: 'xxx',
          area: 'luzernXXX'
        };
        return userRef.set(data, { merge: true });
      }

      uploadPic(data,name){
          console.log()
        this.afStorage.ref(name).put(data)
      }

}
