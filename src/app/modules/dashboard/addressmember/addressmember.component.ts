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
import { AddressmemberService } from '../../../services/dashboard/addressmember.service';
import { Address } from '../../../interfaces/dashboard/address'

@Component({
  selector: 'app-addressmember',
  templateUrl: './addressmember.component.html',
  styleUrls: ['./addressmember.component.scss']
})
export class AddressmemberComponent implements OnInit {

  displayedColumns = [
    'id',
    'membernameTH',
    'membernameEN',
    'member_address',
    'member_tel',
    'member_ID',
    'farm_Name',
    'farm_Logo',
    'shippingaddress',
    'actions'
];

dataSource: MatTableDataSource<Address[]>;
items: Observable<any[]>;
dataView = "card"
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(
    public addressmemberService : AddressmemberService,
  ) { }

  ngOnInit() {
    this.addressmemberService.getListAddressmambers().subscribe(addresss => {
      let datas = addresss.map((address) => {
          return ({ id: address.payload.doc.id, ...address.payload.doc.data() })
      })
      console.log(" ngOnInit() addresss ", datas)
      this.dataSource = new MatTableDataSource(datas);
  })
  }

  changeView(type) {
    this.dataView = type
}

deleteAddressmamber(addressId) {
  this.addressmemberService.deleteAddressmamber(addressId)
}

}
