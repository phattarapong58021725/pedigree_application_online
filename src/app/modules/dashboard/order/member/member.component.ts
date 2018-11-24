import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { Observable, of } from 'rxjs';
import { AddressmemberService } from '../../../../services/dashboard/addressmember.service';
import { Address } from '../../../../interfaces/dashboard/address'
import { ConfirmorderService } from '../../../../services/dashboard/confirmorder.service';
import swal from 'sweetalert2'
import { OrderService } from '../../../../services/dashboard/order.service'
import { Router } from '@angular/router';
import { InputaddressmemberComponent } from '../../addressmember/inputaddressmember/inputaddressmember.component';



@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  order: any = {
    membernameTH: "",
    membernameEN: "",
    member_address: "",
    member_tel: "",
    member_ID: "",
    farm_Name: "",
    farm_Logo: "",
    shippingaddress:"",
};
a:Array<any> = [];
  displayedColumns = [
    'id',
    'membernameTH',
    'membernameEN',
    'member_address',
    'member_tel',
    'member_ID',
    'farm_Name',
    'farm_Logo',
    'shippingaddress',
    'actions'
];
test = [
  'id',
  'membernameTH',
  'membernameEN',
  'member_address',
  'member_tel',
  'member_ID',
  'farm_Name',
  'farm_Logo',
  'shippingaddress',
  'actions',
];
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
check=true;
dataSource: MatTableDataSource<Address[]>;
items: Observable<any[]>;
dataView = "card"
length;
blood_type_1=0;
blood_type_2=0;
total;
id;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(
    public addressmemberService : AddressmemberService,
    public confirmorderService : ConfirmorderService,
    public orderService: OrderService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.addressmemberService.getListAddressmambers().subscribe(addresss => {
      let datas = addresss.map((address) => {
          return ({ id: address.payload.doc.id, ...address.payload.doc.data() })
      })
      console.log(" ngOnInit() addresss ", datas)
      this.dataSource = new MatTableDataSource(datas);

      this.orderService.getListOrders().subscribe(orders => {
        let datas = orders.map((order) => {
          return ({ id: order.payload.doc.id, ...order.payload.doc.data() })
        });
      this.length = datas.length;
        datas.forEach(element => {
            if(element.blood_type == 'พันธุ์แท้'){
              this.blood_type_1++;
            }
            else {
              this.blood_type_2++;
            }
        });
      });


  })

  }

  changeView(type) {
    this.dataView = type
}

deleteAddressmamber(addressId) {
  this.addressmemberService.deleteAddressmamber(addressId)
}

openDialog() {
  const dialogRef = this.dialog.open(InputaddressmemberComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}




getItems(data){
  this.id = data.uid
  this.a = [];
 this.check=false;
  this.test = data;
  this.orderService.getListOrders().subscribe(orders => {
    let datas = orders.map((order) => {
      return ({ id: order.payload.doc.id, ...order.payload.doc.data() })
    });
    this.check=false;
      for(let i=0;i<datas.length;i++){
        
        this.test1 = datas[i];
delete this.test1.id;
        this.test1.farm_Logo = data.farm_Logo;
        this.test1.farm_Name = data.farm_Name;
        this.test1.member_ID = data.member_ID;
        this.test1.member_address = data.member_address;
        this.test1.member_tel = data.member_tel;
        this.test1.membernameEN = data.membernameEN;
        this.test1.membernameTH = data.membernameTH;
        this.test1.shippingaddress = data.shippingaddress;
        this.test1. status_payment = 'ยังไม่ได้ชำระ'
        this.a.push(this.test1);
      }
}); 
 

swal('เลือกที่อยู่สำเร็จ', 'กดยืนยันการสั่งทำ', 'success')
}


deleteOrderall(){
  console.log(this.a);
  for(let i =0;i<this.a.length;i++){
    this.confirmorderService.saveConfirmorder(this.a[i]);
  }
 this.orderService.test();
}

nextpage() {
  this.router.navigate(['/payment', {key:this.a[0].uid}])
}

}