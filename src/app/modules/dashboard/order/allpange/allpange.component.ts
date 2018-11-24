import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { SettingService } from '../../../../services/dashboard/setting.service';
import { Setting } from '../../../../interfaces/dashboard/setting'
import { Order } from '../../../../interfaces/dashboard/order'
import { OrderService } from '../../../../services/dashboard/order.service'
import { Observable, of } from 'rxjs';

import { AddOrderComponent } from '../../order/add-order/add-order.component';
import { AddOrder1Component } from '../../order/add-order1/add-order1.component';
import { AddOrder2Component } from '../../order/add-order2/add-order2.component';
import { AddOrder3Component } from '../../order/add-order3/add-order3.component';
import { AddOrder4Component } from '../../order/add-order4/add-order4.component';
import { AddOrder5Component } from '../../order/add-order5/add-order5.component';

@Component({
  selector: 'app-allpange',
  templateUrl: './allpange.component.html',
  styleUrls: ['./allpange.component.scss']
})
export class AllpangeComponent implements OnInit {
  setting: any = {
    id: null,
    hidden:"",
    hidden1:"",
    cattlename: "",
  }
  displayedColumns = ['id', 'hidden','hidden1', 'cattlename'];
  dataSource: MatTableDataSource<Order[]>;
  items: Observable<any[]>;
  dataView = "table"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public orderService: OrderService,
    public settingService: SettingService,
    public dialog: MatDialog ,
    public dialogRef: MatDialogRef<AllpangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = null) {

    if (data) {
        this.setting = data
    }
}

onNoClick(): void {
  this.dialogRef.close();
}

  openDialog(dataToUpdate: any = null): void {
    let dialogRef = this.dialog.open(AddOrderComponent, {
      height: '900px',
      width: '1500px',
      data: dataToUpdate != null ? dataToUpdate : null
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog1(dataToUpdate: any = null): void {
    let dialogRef = this.dialog.open(AddOrder1Component, {
      height: '950px',
      width: '1800px',
      data: dataToUpdate != null ? dataToUpdate : null
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(dataToUpdate: any = null): void {
    let dialogRef = this.dialog.open(AddOrder2Component, {
      height: '950px',
      width: '1800px',
      data: dataToUpdate != null ? dataToUpdate : null
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(dataToUpdate: any = null): void {
    let dialogRef = this.dialog.open(AddOrder3Component, {
      height: '950px',
      width: '1800px',
      data: dataToUpdate != null ? dataToUpdate : null
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog4(dataToUpdate: any = null): void {
    let dialogRef = this.dialog.open(AddOrder4Component, {
      height: '950px',
      width: '1800px',
      data: dataToUpdate != null ? dataToUpdate : null
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog5(dataToUpdate: any = null): void {
    let dialogRef = this.dialog.open(AddOrder5Component, {
      height: '950px',
      width: '1800px',
      data: dataToUpdate != null ? dataToUpdate : null
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  deleteOrder(orderId) {
    this.orderService.deleteOrder(orderId)
  }
  changeView(type) {
    this.dataView = type
  }
  ngOnInit() {

    this.settingService.getListsettingsall().subscribe(settings => {
      let datas = settings.map((setting) => { 
        return ({ id: setting.payload.doc.id, ...setting.payload.doc.data() })
      })
      console.log(" ngOnInit() settings ", datas)
      this.dataSource = new MatTableDataSource(datas);
    })
  }

  onChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setting[name] = value
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  show: boolean =  true;
  
}
