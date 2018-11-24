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

import { Order } from '../../../../interfaces/dashboard/order'
import { OrderService } from '../../../../services/dashboard/order.service'

import { AddOrderComponent } from '../../order/add-order/add-order.component';
import { FollowDetailComponent } from '../../follow/follow-detail/follow-detail.component';

@Component({
  selector: 'app-wait-confirm',
  templateUrl: './wait-confirm.component.html',
  styleUrls: ['./wait-confirm.component.scss']
})
export class WaitConfirmComponent implements OnInit {
  displayedColumns = ['id',
  // 'membernameTH',
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
  'blood_type',
  'date_of_delivery',
  'actions'
];
public length;
dataSource: MatTableDataSource<Order[]>;
items: Observable<any[]>;
dataView = "table"
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(
  public orderService: OrderService,
  public dialog: MatDialog
) { }

ngOnInit() {
  this.orderService.getListOrders().subscribe(orders => {
    let datas = orders.map((order) => {
      return ({ id: order.payload.doc.id, ...order.payload.doc.data() })
    })
    console.log(" ngOnInit() orders ", datas)
    this.dataSource = new MatTableDataSource(datas);
  })
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

deleteOrder(orderId) {
  this.orderService.deleteOrder(orderId)
}

}

