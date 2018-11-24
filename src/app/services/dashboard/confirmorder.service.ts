import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import {
    AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, count } from 'rxjs/operators';
import swal from 'sweetalert2'
import { MatSnackBar } from '@angular/material';
import { SnackBarMessageComponent } from '../../helpers/snack-bar-message/snack-bar-message.component'
import { AuthService } from '../../services/dashboard/auth.service'
import { Confirmorder } from '../../interfaces/dashboard/confirmorder'


@Injectable({
    providedIn: 'root'
})
export class ConfirmorderService {
    @Input()

    comfirmordersCollection: AngularFirestoreCollection<any[]>;
    confirmorders: Observable<any>
    durationSback: number = 4000
    user: any;

    constructor(
        private db: AngularFirestore,
        private router: Router,
        public snackBar: MatSnackBar,
        public authService: AuthService
    ) { }



    getListConfirmorders() {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('uid', '==', this.authService.getUserId()))
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }


    //association filter wait status table
    getListConfirmorders_wait() {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('status', '==', 'รอดำเนินการ'))
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }

    //association filter inwork status table
    getListConfirmorders_doing() {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('status', '==', 'เริ่มดำเนินการ') )
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }

    //association filter sending status table
    getListConfirmorders_finish() {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('status', '==', 'อยู่ในระหว่างการจัดส่ง'))
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }

    //association report table
    getListConfirmorders_report() {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('status', '==', 'เสร็จสิ้นการทำรายการ'))
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }

    //datefilter
    getListConfirmorders_datefilter(date_a,date_b) {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('date_of_delivery', '>=',date_a).where('date_of_delivery','<=',date_b))
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }

    //association filter order by breed <wait order>
    getListConfirmorders_filter(b) {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('breed', '==', b.value).where('status', '==', 'รอดำเนินการ'))
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }

    //association filter order by breed <inwork order>
    getListConfirmorders_filter2(c) {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('breed', '==', c.value).where('status', '==', 'เริ่มดำเนินการ'))
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }

    //association filter order by breed <sending order>
    getListConfirmorders_filter3(d) {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('breed', '==', d.value).where('status', '==', 'อยู่ในระหว่างการจัดส่ง'))
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }

    //association filter report
    getListConfirmorders_filter_report(e) {
        this.comfirmordersCollection = this.db.collection('confirmorders', ref => ref.where('breed', '==', e.value).where('status', '==', 'เสร็จสิ้นการทำรายการ'))
        this.confirmorders = this.comfirmordersCollection.snapshotChanges()
        return this.confirmorders
    }

    saveConfirmorder(data) {
        this.authService.getCurrentUserId(uid => {
            this.db.collection('confirmorders').add(data).then(() => {
            }).catch(() => {
            })
        })
    }


    updateConfirmorder(data) {
        if (
            data.membernameTH == "" || data.membernameEN == "" || data.member_address == "" || data.member_tel == "" || data.member_ID == "" || data.farm_Name == ""
            || data.farm_Logo == "" ||
            data.breed == "" || data.cattle_Id == "" || data.cattle_Name == "" || data.sex == "" || data.color == "" || data.breeding == "" || data.birth_weight == "" || data.birth_chert == "" ||
            data.wean_weight == "" || data.hip_height == "" || data.fa_Name == "" || data.fa_Id == "" || data.ma_Name == "" || data.ma_Id == "" || data.breeder == ""
            || data.owner_name == "") {
            swal(
                'กรุณากรอกข้อมูลให้ครบถ้วน',
                'warning'
            )
        } else {
            this.authService.getCurrentUserId(uid => {
                let dataToUpdate: any = {
                    id: data.id,
                    membernameTH: data.membernameTH,
                    membernameEN: data.membernameEN,
                    member_address: data.member_address,
                    shippingaddress: data.shippingaddress,
                    member_tel: data.member_tel,
                    member_ID: data.member_ID,
                    breed: data.breed,
                    farm_Name: data.farm_Name,
                    farm_Logo: data.farm_Logo,
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
                    image_name: data.image_name,
                    date_of_delivery: data.date_of_delivery,
                    date_recieve: data.date_recieve,
                    date_sending: data.date_sending,
                    date_finish: data.date_finish,
                    date_report: data.date_report,
                    blood_type: data.blood_type,
                    status_payment: data.status_payment,
                    status: data.status,
                    payment: data.payment,
                    uid: data.uid,
                }
                this.db.collection('confirmorders').doc(data.id).update(dataToUpdate)



                //   this.db.collection('confirmorders').doc(data.id).update(dataToUpdate).then(() => {
                //       swal('แก้ไขสำเร็จ', '', 'success')
                //   }).catch(() => {
                //       swal('แก้ไขล้มเหลว', 'กรุณาใส่ข้อมูลให้ครบถ้วน', 'error')
                //   })
            })

        }
    }

    deleteConfirmorder(id) {
        console.log(id);
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
                this.db.collection('confirmorders').doc(id).delete().then(() => { });
                swal(
                    'ข้อมูลของคุณถูกลบแล้ว!',
                    '',
                    'success'
                )
            }
            else {

            }
        })
    }

    /**
           * 
           * @param data The data to pass to the snackKomponent
           * @param time the duration
           */



}
