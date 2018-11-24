import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { RecordService } from '../../../../services/dashboard/record.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
    MatPaginator,
    MatSort,
    MatTableDataSource,
} from '@angular/material';

@Component({
    selector: 'app-record-list',
    templateUrl: './record-list.component.html',
    styleUrls: ['./record-list.component.scss']
})
export class RecordListComponent implements OnInit {
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
        ma_Id: "",
        breeder: "",
        owner_name: "",
        
    };

    constructor(public recordService: RecordService,
        public dialogRef: MatDialogRef<RecordListComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any = null) {

        if (data) {
            this.record = data
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {

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

