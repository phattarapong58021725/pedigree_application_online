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

import { Record } from '../../../../interfaces/dashboard/record'
import { RecordService } from '../../../../services/dashboard/record.service'
import { RecordListComponent } from '../../../../modules/dashboard/record/record-list/record-list.component';
import { RecordDetailComponent } from '../../../../modules/dashboard/record/record-detail/record-detail.component';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-reportrecord',
  templateUrl: './reportrecord.component.html',
  styleUrls: ['./reportrecord.component.scss']
})
export class ReportrecordComponent implements OnInit {
  displayedColumns = ['id',
  'cattle_Id',
  'cattle_Name',
  // 'date_of_birth',
  'sex',
  // 'color',
  // 'breeding',
  // 'birth_weight',
  // 'birth_chert',
  // 'date_of_wean',
  // 'wean_weight',
  // 'wean_chert',
  // 'hip_height',
  // 'fa_Name',
  'fa_Id',
  // 'ma_Name',
  'ma_Id',
  // 'breeder',
  // 'owner_name',

  'date_of_record',

];


dataSource: MatTableDataSource<Record[]>;
items: Observable<any[]>;
dataView = "table"
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;


constructor(
  public recordService: RecordService,
  public dialog: MatDialog,
  private afStorage: AngularFireStorage)
  {
 
   
  }
opendeDialog(dataToUpdate: any = null): void {

  let dialogRef = this.dialog.open(RecordDetailComponent, {
    height: '950px',
    width: '1800px',
    data: dataToUpdate != null ? dataToUpdate : null
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
openDialog(dataToUpdate: any = null): void {

  let dialogRef = this.dialog.open(RecordListComponent, {
    height: '920px',
    width: '1800px',
    data: dataToUpdate != null ? dataToUpdate : null
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
ngOnInit() {
  this.recordService.getListRecords().subscribe(records => {
    let datas = records.map((record) => {
      return ({ id: record.payload.doc.id, ...record.payload.doc.data() })
    })
    console.log(" ngOnInit() records ", datas)
    this.dataSource = new MatTableDataSource(datas);
  })
}
deleteRecord(recordId) {
  console.log(recordId)
  //this.recordService.deleteRecord(recordId)
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

}
