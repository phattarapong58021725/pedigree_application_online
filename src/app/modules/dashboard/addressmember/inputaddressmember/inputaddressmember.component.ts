import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AddressmemberService } from '../../../../services/dashboard/addressmember.service';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import { Observable, of } from 'rxjs';
import { Address } from '../../../../interfaces/dashboard/address'
import { Router } from '@angular/router';


@Component({
  selector: 'app-inputaddressmember',
  templateUrl: './inputaddressmember.component.html',
  styleUrls: ['./inputaddressmember.component.scss']
})
export class InputaddressmemberComponent implements OnInit {
  address: any = {
    id:null,
    membernameTH: "",
    membernameEN: "",
    member_address: "",
    member_tel: "",
    member_ID: "",
    farm_Name: "",
    farm_Logo: "",
    shippingaddress:""
  };

  dataSource: MatTableDataSource<Address[]>;
  items: Observable<any[]>;
  dataView = "table"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( 
    public addressmemberService : AddressmemberService,
    private router: Router,
    ) { }

  changeView(type) {
    this.dataView = type
}

  ngOnInit() {
    this.addressmemberService.getListAddressmambers().subscribe(addresss => {
      let datas = addresss.map((address) => {
          return ({ id: address.payload.doc.id, ...address.payload.doc.data() })
      })
      console.log(" ngOnInit() addresss ", datas)
      this.dataSource = new MatTableDataSource(datas);
  })
  }

  onChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.address[name] = value
}


  saveAddressmamber() {
    this.addressmemberService.saveAddressmamber(this.address)
  }
  updateAddressmamber() {
    this.addressmemberService.updateAddressmamber(this.address)
  }
}
