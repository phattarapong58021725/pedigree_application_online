import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderService } from '../../../../services/dashboard/order.service'
import {
    MatPaginator,
    MatSort,
    MatTableDataSource,
} from '@angular/material';
import { Observable, of } from 'rxjs';
import { Order } from '../../../../interfaces/dashboard/order'
import { ConfirmOrderComponent } from '../../order/confirm-order/confirm-order.component';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-add-order5',
  templateUrl: './add-order5.component.html',
  styleUrls: ['./add-order5.component.scss']
})
export class AddOrder5Component implements OnInit {
  order: any = {
    id: null,
    membernameTH: "",
    membernameEN: "",
    member_address: "",
    shippingaddress:"",
    member_tel: "",
    member_ID: "",
    breed: "กำแพงแสน",
    blood_type : "",
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
    status_payment:"",
    date_of_delivery: Date.now(),
    status: "รอดำเนินการ"

};
displayedColumns = ['id',
    // 'membernameTH',
    // 'membernameEN',
    // 'member_address',
    // 'member_tel',
    // 'member_ID',
    // 'farm_Name',
    // 'farm_Logo',
    'blood_type',
    'breed',
    'cattle_Id',
    'cattle_Name',
    'date_of_birth',
    'sex',
    'color',
    'breeding',
    'birth_weight',
    'birth_chert',
    'date_of_wean',
    'wean_weight',
    'wean_chert',
    'hip_height',
    'fa_Name',
    'fa_Id',
    'ma_Name',
    'ma_Id',
    'breeder',
    'owner_name',
    'date_of_delivery',
    'status',
    'actions'
];

file;
record2;
imageUrl;
localStorageUser;

dataSource: MatTableDataSource<Order[]>;
items: Observable<any[]>;
dataView = "table"
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;


constructor(
    public orderService: OrderService,
    public dialog: MatDialog,
    private router: Router,
    public dialogRef: MatDialogRef<AddOrder5Component>,
    @Inject(MAT_DIALOG_DATA) public data: any = null) {

    if (data) {
        this.order = data
    }
    
}
openDialog(dataToUpdate: any = null): void {

    let dialogRef = this.dialog.open(ConfirmOrderComponent, {
        height: '1000px',
        width: '1800px',
        data: dataToUpdate != null ? dataToUpdate : null
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });

}
onNoClick(): void {
    this.dialogRef.close();
}
deleteOrder(orderId) {
    this.orderService.deleteOrder(orderId)
}
changeView(type) {
    this.dataView = type
}

applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}

ngOnInit() {
    this.orderService.getListOrders().subscribe(orders => {
        let datas = orders.map((order) => {
            return ({ id: order.payload.doc.id, ...order.payload.doc.data() })
        })
        console.log(" ngOnInit() orders ", datas)
        this.dataSource = new MatTableDataSource(datas);
        this,this.orderService.setLengthOrder(datas.length);
    })
}

onChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.order[name] = value
}

saveOrder() {
    this.orderService.saveOrder(this.order)
    this.orderService.uploadPic(this.file,this.file.name);
}
updateOrder() {
    this.orderService.updateOrder(this.order)
}
nextpage() {
//     swal({
//         title: "คุณจะสั่งทำต่อหรือไม่",
//         text: "",
//         icon: "warning",
//         buttons : ['กลับ', 'ยืนยัน'],
//         dangerMode: true,
//       })
//       .then((willDelete) => {
//         if (willDelete) {
//             this.router.navigate(['/order'])
//         } else {
//             this.router.navigate(['/member'])
//         }
//     }).catch(() => {
//         swal("ล้มเหลว", "กรุณาตรวจสอบอีกครั้ง", "error");
//     })
swal({
    title: 'คุณต้องการสั่งทำต่อหรือไม่',
    text: "กดสั่งทำต่อเพื่อเลือกสายพันธุ์โค",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'ไปที่รายการสั่งทำ',
    confirmButtonText: 'สั่งทำต่อ',
}).then((result) => {
    if (result.value) {
        this.router.navigate(['/order'])
    }else {
          this.router.navigate(['/member'])
          swal(
            'บันทึกรายการสั่งทำเรียบร้อย',
            'ตรวจสอบได้ที่รายการการสั่งทำ',
            'success'
        )
}
})
}

onFileSelection(event) {
    this.order.image_name =  event.target.files[0].name;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.imageUrl = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
    this.file = event.target.files[0];

  }

}


