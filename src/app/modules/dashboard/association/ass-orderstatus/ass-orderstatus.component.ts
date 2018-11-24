import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
    MatPaginator,
    MatSort,
    MatTableDataSource,
} from '@angular/material';
import { Observable, of } from 'rxjs';
import { Confirmorder } from '../../../../interfaces/dashboard/confirmorder'
import { ConfirmorderService } from '../../../../services/dashboard/confirmorder.service';

@Component({
    selector: 'app-ass-orderstatus',
    templateUrl: './ass-orderstatus.component.html',
    styleUrls: ['./ass-orderstatus.component.scss']
})
export class AssOrderstatusComponent implements OnInit {
    confirmorder: any = {
        id: null,
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
        image_name:"",
        date_of_delivery: Date.now(),
        status: "รอดำเนินการ"

    };
    displayedColumns = ['id',
        'membernameTH',
        'membernameEN',
        'member_address',
        'member_tel',
        'member_ID',
        'farm_Name',
        'farm_Logo',
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
    dataSource: MatTableDataSource<Confirmorder[]>;
    items: Observable<any[]>;
    dataView = "table"
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        public confirmorderService : ConfirmorderService,
        public dialogRef: MatDialogRef<AssOrderstatusComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any = null) {

        if (data) {
            this.confirmorder = data
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    deleteConfirmorder(confirmordersId) {
        this.confirmorderService.deleteConfirmorder(confirmordersId)
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
        this.confirmorderService.getListConfirmorders().subscribe(confirmorders => {
            let datas = confirmorders.map((confirmorder) => {
                return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
            })
            console.log(" ngOnInit() orders ", datas)
            this.dataSource = new MatTableDataSource(datas);
        })
    }

    onChange(event) {
        let value = event.target.value
        let name = event.target.name
        this.confirmorder[name] = value
    }

    saveConfirmorder() {
        this.confirmorderService.saveConfirmorder(this.confirmorder)

    }
    updateConfirmorder() {
        this.confirmorderService.updateConfirmorder(this.confirmorder)
    }


}