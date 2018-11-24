import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { Observable, of } from 'rxjs';
import { Confirmorder } from '../../../interfaces/dashboard/confirmorder'
import { ConfirmorderService } from '../../../services/dashboard/confirmorder.service';
import { AssOrderstatusComponent } from '../association/ass-orderstatus/ass-orderstatus.component';
import { AssOrderrefuseComponent } from '../association/ass-orderrefuse/ass-orderrefuse.component';
import { AssOrderdetailComponent } from '../association/ass-orderdetail/ass-orderdetail.component';
import { filter } from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {
  filterdata: string;
  confirmorder: any = {
    id: null,

    status: "",
    status_payment: "",
    membernameTH: "",
    membernameEN: "",
    member_address: "",
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
    image_name: "",
    date_of_delivery: Date.now(),
    
  };

  displayedColumns = ['id',
    'membernameTH',
    'breed',
    'cattle_Id',
    'cattle_Name',
    'status_payment',
    'date_of_delivery',
    'actions',
    'update',
    
  ];

  displayedColumns2 = ['id',
    'membernameTH',
    'breed',
    'cattle_Name',
    'status_payment',
    'date_of_delivery',
    'actions',
    'update',
  ];

  displayedColumns3 = ['id',
    'membernameTH',
    'breed',
    'cattle_Name',
    'status_payment',
    'date_of_delivery',
    'actions',
    'update',
  ];



  dataSource: MatTableDataSource<Confirmorder[]>;
  dataSource2: MatTableDataSource<Confirmorder[]>;
  dataSource3: MatTableDataSource<Confirmorder[]>;
  items: Observable<any[]>;
  dataView = "table"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public confirmorderService: ConfirmorderService,
    public dialog: MatDialog,

  ) {

  }

  recieve(dataToUpdate: any = null) {
    this.confirmorder = dataToUpdate
    swal({
      title: 'ยืนยันการทำรายการ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.value) {
        this.confirmorder.status_payment = "จ่ายแล้ว"
        this.confirmorder.status = "เริ่มดำเนินการ"
        this.confirmorderService.updateConfirmorder(this.confirmorder)
        swal('ทำรายการสำเร็จ', '', 'success')
      }
      else {
      }
    })
  }

  sending(dataToUpdate: any = null) {
    this.confirmorder = dataToUpdate
    swal({
      title: 'ยืนยันการทำรายการ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.value) {
        this.confirmorder.status = "อยู่ในระหว่างการจัดส่ง"
        this.confirmorderService.updateConfirmorder(this.confirmorder)
        swal('ทำรายการสำเร็จ', '', 'success')
      }
      else {
      }
    })
  }

  finished(dataToUpdate: any = null) {
    this.confirmorder = dataToUpdate
    swal({
      title: 'ยืนยันการทำรายการ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.value) {
        this.confirmorder.status = "เสร็จสิ้นการทำรายการ"
        this.confirmorderService.updateConfirmorder(this.confirmorder)
        swal('ทำรายการสำเร็จ', '', 'success')
      }
      else {
      }
    })
  }

  openDialog(dataToUpdate: any = null): void {

    let dialogRef = this.dialog.open(AssOrderstatusComponent, {
      height: '500px',
      width: '500px',
      data: dataToUpdate != null ? dataToUpdate : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
  opensDialog(dataToUpdate: any = null): void {

    let dialogRef = this.dialog.open(AssOrderrefuseComponent, {
      height: '500px',
      width: '500px',
      data: dataToUpdate != null ? dataToUpdate : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openssDialog(dataToUpdate: any = null): void {

    let dialogRef = this.dialog.open(AssOrderdetailComponent, {
      height: '1000px',
      width: '1800px',
      data: dataToUpdate != null ? dataToUpdate : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    
    //dataSource status at รอดำเนินการ
    this.confirmorderService.getListConfirmorders_wait().subscribe(confirmorders => {
      let datas = confirmorders.map((confirmorder) => {
        return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
      })
      console.log(" ngOnInit() orders ", datas)
      this.dataSource = new MatTableDataSource(datas);
    })
    //dataSource2 status at อยู่ในระหว่างการดำเนินการ
    this.confirmorderService.getListConfirmorders_doing().subscribe(confirmorders => {
      let datas = confirmorders.map((confirmorder) => {
        return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
      })
      this.dataSource2 = new MatTableDataSource(datas);
    })
    //dataSource3 status at อยู่ในระหว่างการจัดส่ง
    this.confirmorderService.getListConfirmorders_finish().subscribe(confirmorders => {
      let datas = confirmorders.map((confirmorder) => {
        return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
      })
      this.dataSource3 = new MatTableDataSource(datas);
    })
  }

  //for delete data
  deleteConfirmorder(ConfirmordersId) {
    this.confirmorderService.deleteConfirmorder(ConfirmordersId)
  }
  changeView(type) {
    this.dataView = type
  }

  applyFilter(a) {
    console.log(a.value)  
    if (a.value === 'ทั้งหมด') {
      this.confirmorderService.getListConfirmorders_wait().subscribe(confirmorders => {
        let datas = confirmorders.map((confirmorder) => {
          return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
        })
        this.dataSource = new MatTableDataSource(datas);
      })
    }
    else{
      this.confirmorderService.getListConfirmorders_filter(a).subscribe(confirmorders => {
        let datas = confirmorders.map((confirmorder) => {
          return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
        })
        this.dataSource = new MatTableDataSource(datas);
      })
    }

  }
  // applyFilter2(filterb) {
  //   console.log(filterb.value)
  //   if (filterb.value === 'ทั้งหมด') {
  //     this.confirmorderService.getListConfirmorders_doing().subscribe(confirmorders => {
  //       let datas = confirmorders.map((confirmorder) => {
  //         return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
  //       })
  //       this.dataSource2 = new MatTableDataSource(datas);
  //     })
  //   }
  //   else {
  //     this.confirmorderService.getListConfirmorders_filter2(filterb.value).subscribe(confirmorders => {
  //       let datas = confirmorders.map((confirmorder) => {
  //         return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
  //       })
  //       this.dataSource2 = new MatTableDataSource(datas);
  //     })
  //   }
  // }
  // applyFilter3(filterc) {
  //   console.log(filterc.value)
  //   if(filterc.value ==='ทั้งหมด'){
  //     this.confirmorderService.getListConfirmorders_finish().subscribe(confirmorders => {
  //       let datas = confirmorders.map((confirmorder) => {
  //         return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
  //       })
  //       this.dataSource3 = new MatTableDataSource(datas);

  //     })
  //   }
  //   else{
  //     this.confirmorderService.getListConfirmorders_filter3(filterc.value).subscribe(confirmorders => {
  //       let datas = confirmorders.map((confirmorder) => {
  //         return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
  //       })
  //       console.log(" ngOnInit() orders ", datas)
  //       this.dataSource3 = new MatTableDataSource(datas);
  //     })
  //   }
  // }

  applyautoFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyautoFilter2(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource2.filter = filterValue;
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
  applyautoFilter3(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource3.filter = filterValue;
    if (this.dataSource3.paginator) {
      this.dataSource3.paginator.firstPage();
    }
  }

}
