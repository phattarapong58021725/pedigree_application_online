import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';
import { AddressmemberService } from '../../../../services/dashboard/addressmember.service';
import { ConfirmorderService } from '../../../../services/dashboard/confirmorder.service';
import { OrderService } from '../../../../services/dashboard/order.service';

@Component({
  selector: 'app-cashondeli',
  templateUrl: './cashondeli.component.html',
  styleUrls: ['./cashondeli.component.scss']
})
export class CashondeliComponent implements OnInit {
  test1: any = {
    id:null,
    membernameTH: "",
    membernameEN: "",
    member_address: "",
    shippingaddress:"",
    member_tel: "",
    member_ID: "",
    breed: "",
    farm_Name: "",
    farm_Logo: "",
    cattle_Id: "",
    cattle_Name: "",
    date_of_birth: "",
    sex: "",
    color: "",
    breeding: "",
    birth_weight: "",
    birth_chert: "",
    date_of_wean: "",
    wean_weight: "",
    wean_chert: "",
    hip_height: "",
    fa_Name: "",
    fa_Id: "",
    ma_Name: "",
    ma_Id: "",
    breeder: "",
    owner_name: "",
    image_name:"",
    date_of_delivery: Date.now(),
    status: "รอดำเนินการ",
    uid: "",
    status_payment:""
  };
  addressuser
  constructor(private router: ActivatedRoute,
    private address:AddressmemberService,
    private confirmorderService: ConfirmorderService,
    private orderService: OrderService) { }
   
  ngOnInit() {
    console.log(this.router.snapshot.paramMap.get('key'));
    this.address.getListAddressmambersByKey(this.router.snapshot.paramMap.get('key')).subscribe(orders => {
      let datas = orders.map((order) => {
        return ({ id: order.payload.doc.id, ...order.payload.doc.data() })
      });
      datas.forEach(element => {
        this.addressuser=element;
      })
  });
  }

  openswel(){
    this.orderService.getListOrders().subscribe(orders => {
      let datas = orders.map((order) => {
        return ({ id: order.payload.doc.id, ...order.payload.doc.data() })
      });
        for(let i=0;i<datas.length;i++){
          
          this.test1 = datas[i];
  delete this.test1.id;
          this.test1.farm_Logo =  this.addressuser.farm_Logo;
          this.test1.farm_Name =  this.addressuser.farm_Name;
          this.test1.member_ID =  this.addressuser.member_ID;
          this.test1.member_address =  this.addressuser.member_address;
          this.test1.member_tel =  this.addressuser.member_tel;
          this.test1.membernameEN = this.addressuser.membernameEN;
          this.test1.membernameTH =  this.addressuser.membernameTH;
          this.test1.shippingaddress =  this.addressuser.shippingaddress;
          this.test1. status_payment = 'รอเก็บเงินปลายทาง'
          this.confirmorderService.saveConfirmorder(this.test1);
        }
    console.log(this.addressuser);
    swal('สั่งทำสำเร็จ', 'เช็ครายละเอียดได้ที่หน้าติดตามสถานะ', 'success');
  });
  this.orderService.test();
  }

}
