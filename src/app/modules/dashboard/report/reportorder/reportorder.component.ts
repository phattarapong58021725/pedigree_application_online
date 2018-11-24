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

import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

import { AddOrderComponent } from '../../order/add-order/add-order.component';
import { FollowDetailComponent } from '../../follow/follow-detail/follow-detail.component';

import { Confirmorder } from '../../../../interfaces/dashboard/confirmorder'
import { ConfirmorderService } from '../../../../services/dashboard/confirmorder.service';

@Component({
  selector: 'app-reportorder',
  templateUrl: './reportorder.component.html',
  styleUrls: ['./reportorder.component.scss']
})
export class ReportorderComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['บราห์มัน', 'แองกัส', 'ตาก'];
  filteredOptions: Observable<string[]>;

  displayedColumns = ['id',
  'membernameTH',
  //  'membernameEN',
  //  'member_address',
  //  'member_tel',
  //  'member_ID',
  //  'farm_Name',
  //  'farm_Logo',
  'breed',
  'cattle_Id', 
  'cattle_Name',
  // 'date_of_birth',
  // 'sex',
  // 'color',
  // 'breeding',
  // 'birth_weight',
  // 'birth_chert',
  // 'date_of_wean',
  // 'wean_weight',
  // 'wean_chert',
  // 'hip_height',
  // 'fa_Name',
  // 'fa_Id',
  // 'ma_Name',
  // 'ma_Id',
  // 'breeder',
  // 'owner_name',
  'date_of_delivery',
  // 'status',

];
dataSource: MatTableDataSource<Confirmorder[]>;
items: Observable<any[]>;
dataView = "table"
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(
  public confirmorderService: ConfirmorderService,
  public dialog: MatDialog
) { }

ngOnInit() {
  this.confirmorderService.getListConfirmorders().subscribe(confirmorders => {
    let datas = confirmorders.map((confirmorder) => {
      return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
    })
    console.log(" ngOnInit() orders ", datas)
    this.dataSource = new MatTableDataSource(datas);
  })
  
}


openDialog(dataToUpdate: any = null): void {

  let dialogRef = this.dialog.open(AddOrderComponent, {
    height: '900px',
    width: '1800px',
    data: dataToUpdate != null ? dataToUpdate : null
  });


  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
openDialogdetail(dataToUpdate: any = null): void {

  let dialogRef = this.dialog.open(FollowDetailComponent, {
    height: '600px',
    width: '800px',
    data: dataToUpdate != null ? dataToUpdate : null
  });


  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}


deleteConfirmorder(comfrimorderId) {
  this.confirmorderService.deleteConfirmorder(comfrimorderId);
  console.log(comfrimorderId);

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
  }else{
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

}
