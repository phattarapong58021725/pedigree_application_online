import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DateAdapter } from '@angular/material';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Observable, of } from 'rxjs';
import { Confirmorder } from '../../../interfaces/dashboard/confirmorder'
import { ConfirmorderService } from '../../../services/dashboard/confirmorder.service';
import { AssOrderstatusComponent } from '../association/ass-orderstatus/ass-orderstatus.component';
import { AssOrderrefuseComponent } from '../association/ass-orderrefuse/ass-orderrefuse.component';
import { AssOrderdetailComponent } from '../association/ass-orderdetail/ass-orderdetail.component';
import { filter } from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-association-report',
  templateUrl: './association-report.component.html',
  styleUrls: ['./association-report.component.scss']
})
export class AssociationReportComponent implements OnInit {
  startDate = new Date(2018, 0, 1);
  endDate = new Date(2018,0,1);
  datefilterstart = new Date(2018,0.1);
  datefilterend = new Date(2018,0,1);
  filterdata: string;
  confirmorder: any = {
    id: null,

    status:         "",
    payment:        "",
    status_payment: "",
    membernameTH:   "",
    membernameEN:   "",
    member_address: "",
    member_tel:     "",
    member_ID:      "",
    breed:          "",
    farm_Name:      "",
    farm_Logo:      "",
    cattle_Id:      "",
    cattle_Name:    "",
    date_of_birth:  "",
    sex:            "",
    color:          "",
    breeding:       "",
    birth_weight:   "",
    birth_chert:    "",
    date_of_wean:   "",
    wean_weight:    "",
    wean_chert:     "",
    hip_height:     "",
    fa_Name:        "",
    fa_Id:          "",
    ma_Name:        "",
    ma_Id:          "",
    breeder:        "",
    owner_name:     "",
    image_name:     "",
    date_of_delivery: Date.now(),
    date_recieve:   "",
    date_sending:   "",
    date_finish:    "",
    date_report:    "",
    
  };

  displayedColumns = ['id',
    'membernameTH',
    'breed',
    'cattle_Id',
    'cattle_Name',
    'status_payment',
    'date_of_delivery',
    'actions',    
  ];

  
  dataSource: MatTableDataSource<Confirmorder[]>;
  
  items: Observable<any[]>;

  dataView = "table"

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public confirmorderService: ConfirmorderService,
    public dialog: MatDialog,
    
  ) {
  
  }


  datestart(event){
    let value = event.target.value
    this.datefilterstart = new Date(value);
    console.log(this.datefilterstart)
  }
  dateend(event){
    let value = event.target.value
    this.datefilterend = new Date(value);
    console.log(this.datefilterend)
  }
  
  searching(){
    this.confirmorderService.getListConfirmorders_datefilter(this.datefilterstart,this.datefilterend).subscribe(confirmorders => {
      let datas = confirmorders.map((confirmorder) => {
        return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
      })
      this.dataSource = new MatTableDataSource(datas);
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
  
  ngOnInit() {
    
    //dataSource status at รอดำเนินการ
    this.confirmorderService.getListConfirmorders_report().subscribe(confirmorders => {
      let datas = confirmorders.map((confirmorder) => {
        return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
      })
      console.log(" ngOnInit() orders ", datas)
      this.dataSource = new MatTableDataSource(datas);
    })
  }

  applyFilter(a) {
    console.log(a.value)  
    if (a.value === 'ทั้งหมด') {
      this.confirmorderService.getListConfirmorders_report().subscribe(confirmorders => {
        let datas = confirmorders.map((confirmorder) => {
          return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
        })
        this.dataSource = new MatTableDataSource(datas);
      })
    }
    else{
      this.confirmorderService.getListConfirmorders_filter_report(a).subscribe(confirmorders => {
        let datas = confirmorders.map((confirmorder) => {
          return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
        })
        this.dataSource = new MatTableDataSource(datas);
      })
    }

  }

  //for delete data
  deleteConfirmorder(ConfirmordersId) {
    this.confirmorderService.deleteConfirmorder(ConfirmordersId)
  }
  changeView(type) {
    this.dataView = type
  }

  

}
