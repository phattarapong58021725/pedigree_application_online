import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { OrderService } from '../../../../services/dashboard/order.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
    MatPaginator,
    MatSort,
    MatTableDataSource,
} from '@angular/material';
import { ConfirmorderService } from '../../../../services/dashboard/confirmorder.service';
import { Observable, of } from 'rxjs';

import { Confirmorder } from '../../../../interfaces/dashboard/confirmorder'
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
    selector: 'app-follow-detail',
    templateUrl: './follow-detail.component.html',
    styleUrls: ['./follow-detail.component.scss']
})
export class FollowDetailComponent implements OnInit {
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
    test;
    dataSource: MatTableDataSource<Confirmorder[]>;
    items: Observable<any[]>;
    dataView = "table"
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        public orderService: OrderService,
        private afStorage: AngularFireStorage,
        public confirmorderService :ConfirmorderService,
        public dialogRef: MatDialogRef<FollowDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any = null) {

        if (data) {
            this.confirmorder = data;
            console.log(data);
            this.afStorage.ref(this.confirmorder.image_name).getDownloadURL().subscribe(url=>{
                this.test = url;
             })
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
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
            console.log(" ngOnInit() confirmorders ", datas)
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
