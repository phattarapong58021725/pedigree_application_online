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
import { Order } from '../../interfaces/dashboard/order'
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    @Input()
    ordersCollection: AngularFirestoreCollection<any[]>;
    orders: Observable<any>
    durationSback: number = 4000
    user: any
    length:any;
    constructor(
        private db: AngularFirestore,
        private router: Router,
        public snackBar: MatSnackBar,
        public authService: AuthService,
        private afStorage: AngularFireStorage,
    ) { }
    getListOrders() {
        this.ordersCollection = this.db.collection('orders', ref => ref.where('uid', '==', this.authService.getUserId()));
        // this.ordersCollection = this.db.collection('orders', ref => ref.orderBy('date_of_delivery', 'asc'));
        this.orders = this.ordersCollection.snapshotChanges()
        return this.orders
    }

    
    getListOrdersall() {
        this.ordersCollection = this.db.collection('orders', ref => ref.orderBy('date_of_delivery', 'asc'))
        this.orders = this.ordersCollection.snapshotChanges()
        return this.orders
    }
    
    saveOrder(data) {
        if (
            // data.membernameTH == "" || data.membernameEN == "" || data.member_address == "" || data.member_tel == "" || data.member_ID == "" || data.farm_Name == ""
            // || data.farm_Logo == "" || 
            data.breed == "" || data.cattle_Id == "" || data.cattle_Name == "" || data.sex == "" || data.color == "" || data.breeding == "" || data.birth_weight == "" || data.birth_chert == "" ||
            data.wean_weight == "" || data.hip_height == "" || data.fa_Name == "" || data.fa_Id == "" || data.ma_Name == "" || data.ma_Id == "" || data.breeder == ""
            || data.owner_name == "") {
            swal(
                'กรุณากรอกข้อมูล',
                'กรุณากรอกข้อมูลให้ครบถ้วน',
                'warning'
            )
            // this.router.navigate(['/allpange'])
        } else {
        console.log(data);
        this.authService.getCurrentUserId(uid => {
                let dataToSave: any = {
                    membernameTH: data.membernameTH,
                    membernameEN: data.membernameEN,
                    member_address: data.member_address,
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
                    status: data.status,
                    status_payment:data.status_payment,
                    date_of_delivery: data.date_of_delivery,
                    shippingaddress:data.shippingaddress,
                    image_name: data.image_name,
                    blood_type:data.blood_type,
                    uid:uid
                }
                this.ordersCollection.add(dataToSave).then(() => {
                    swal('เพิ่มรายการสำเร็จ', 'เช็ครายละเอียดได้ที่หน้าติดตามสถานะ', 'success')
                }).catch(() => {
                    swal('เพิ่มรายการล้มเหลว', 'กรุณาใส่ข้อมูลให้ครบถ้วน', 'error')
            })
        });
        }
    }
    updateOrder(data) {
        if (
            // data.membernameTH == "" 
            // || data.membernameEN == "" || data.member_address == "" || data.member_tel == "" || data.member_ID == "" || data.farm_Name == ""
            // || data.farm_Logo == ""  || 
            data.breed == ""  ||  data.cattle_Id == ""  || data.cattle_Name == "" || data.sex == "" || data.color == "" || data.breeding == "" || data.birth_weight == "" || data.birth_chert == "" ||
             data.wean_weight == "" || data.hip_height == "" || data.fa_Name == "" || data.fa_Id == "" || data.ma_Name == "" || data.ma_Id == "" || data.breeder == ""
            || data.owner_name == ""
            ) {
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
                    status: data.status,
                    status_payment:data.status_payment,
                    date_of_delivery: data.date_of_delivery,
                    shippingaddress:data.shippingaddress,
                    image_name: data.image_name,
                    blood_type:data.blood_type,
                    uid: uid
                }

                this.ordersCollection.doc(data.id).update(dataToUpdate).then(() => {
                    swal('แก้ไขสำเร็จ', '', 'success')
                }).catch(() => {
                    swal('แก้ไขล้มเหลว', 'กรุณาใส่ข้อมูลให้ครบถ้วน', 'error')
                })
            })

        }
    }

  
    
    deleteOrder(id) {
        //     swal({
        //         title: "คุณแน่ใจหรือไม่",
        //         text: "เมื่อลบแล้วคุณจะไม่สามารถกู้คืนข้อมูลนี้ได้",
        //         icon: "warning",
        //         buttons : ['กลับ', 'ยืนยัน'],
        //         dangerMode: true,
        //       })
        //       .then((willDelete) => {
        //         if (willDelete) {
        //             this.db.firestore.collection('orders').doc(id).delete().then(() => {});
        //           swal("ข้อมูลของคุณถูกลบแล้ว", {
        //             icon: "success",
        //           });
        //         } else {
        //           swal("ข้อมูลของคุณปลอดภัย");
        //         }
        //     }).catch(() => {
        //         swal("ล้มเหลว", "กรุณาตรวจสอบอีกครั้ง", "error");
        //     })
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
                this.db.firestore.collection('orders').doc(id).delete().then(() => { });
                swal(
                    'รายการขอวคุณถูกลบแล้ว',
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
      setLengthOrder(length){
          this.length = length;
      }
      getLengthOrder(){
          return this.length;
      }          

      test(){
        this.db.collection('orders').snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            })})).subscribe((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id);
                    this.db.firestore.collection('orders').doc(doc.id).delete()
                });
            });
      }
      test1(){
        this.db.collection('confirmorders',ref => ref.where('status_payment','==','ยังไม่ได้ชำระ')).snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            })})).subscribe((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id);
                    this.db.firestore.collection('confirmorders').doc(doc.id).delete()
                });
            });
      }

      setUserToLocalStorage(orderFromDatabase) {
        localStorage.setItem('orders', JSON.stringify(orderFromDatabase));
      }
    
      destroyOrderLocalStorage() {
        localStorage.removeItem('orders');
      }
    
      getOrderFromLocalStorage() {
        return JSON.parse(localStorage.getItem('orders')) || [];
      }

      setUserMerge(order: any) {
        const userRef: AngularFirestoreDocument<any> = this.db.doc(`orders/${order.id}`);
        const data: any = {
          downloadUrl: 'xxx',
          area: 'luzernXXX'
        };
        return userRef.set(data, { merge: true });
      }

      uploadPic(data,name){
   
        this.afStorage.ref(name).put(data)
      }

      
    }
