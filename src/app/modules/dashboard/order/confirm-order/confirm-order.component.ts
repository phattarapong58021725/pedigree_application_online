import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { OrderService } from '../../../../services/dashboard/order.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
    MatPaginator,
    MatSort,
    MatTableDataSource,
} from '@angular/material';

import { Observable, of } from 'rxjs';

import { Order } from '../../../../interfaces/dashboard/order'

@Component({
    selector: 'app-confirm-order',
    templateUrl: './confirm-order.component.html',
    styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {

    order: any = {
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
    dataSource: MatTableDataSource<Order[]>;
    items: Observable<any[]>;
    dataView = "table"
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        public orderService: OrderService,
        public dialogRef: MatDialogRef<ConfirmOrderComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any = null) {

        if (data) {
            this.order = data
        }
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
        })
    }
    onChange(event) {
        let value = event.target.value
        let name = event.target.name
        this.order[name] = value
    }

    saveOrder() {
        this.orderService.saveOrder(this.order)

    }
    updateOrder() {
        this.orderService.updateOrder(this.order)
    }



}
