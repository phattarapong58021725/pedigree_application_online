import { Component, OnInit, Inject, ViewChild, Testability } from '@angular/core';
import { RecordService } from '../../../../services/dashboard/record.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
    MatPaginator,
    MatSort,
    MatTableDataSource,
} from '@angular/material';

import { Observable, of } from 'rxjs';

import { Record } from '../../../../interfaces/dashboard/record'
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
    selector: 'app-record-detail',
    templateUrl: './record-detail.component.html',
    styleUrls: ['./record-detail.component.scss']
})
export class RecordDetailComponent implements OnInit {
    record: any = {
        id: null,
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
        image_name:"",
        ma_Id: "",
        breeder: "",
        owner_name: "",
    };
    displayedColumns = ['id',
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
    ];
  test;
    dataSource: MatTableDataSource<Record[]>;
    items: Observable<any[]>;
    dataView = "table"
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
 
    constructor(
        public recordService: RecordService,
        private afStorage: AngularFireStorage,
        public dialogRef: MatDialogRef<RecordDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any = null) {

        if (data) {
            this.record = data;
       
         this.afStorage.ref(this.record.image_name).getDownloadURL().subscribe(url=>{
            this.test = url;
         })
         
        }

    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    deleteRecord(recordId) {
        this.recordService.deleteRecord(recordId)
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
        this.recordService.getListRecords().subscribe(records => {
            let datas = records.map((record) => {
                return ({ id: record.payload.doc.id, ...record.payload.doc.data() })        
            })
            console.log(" ngOnInit() records ", datas)
            this.dataSource = new MatTableDataSource(datas);
        })
        
    }
    onChange(event) {
        let value = event.target.value
        let name = event.target.name
        this.record[name] = value
    }

    saveRecord() {
        this.recordService.saveRecord(this.record)

    }
    updateRecord() {
        this.recordService.updateRecord(this.record)
    }


}
