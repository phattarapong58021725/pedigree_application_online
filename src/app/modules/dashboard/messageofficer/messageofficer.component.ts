import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import { Observable, of } from 'rxjs';
import { ChatappadminService } from '../../../services/dashboard/chatappadmin.service';
import { Chatadmin } from '../../../interfaces/dashboard/chatadmin';

@Component({
  selector: 'app-messageofficer',
  templateUrl: './messageofficer.component.html',
  styleUrls: ['./messageofficer.component.scss']
})
export class MessageofficerComponent implements OnInit {
  chatadmin : any = {
    id: null,
    namechatadmin:"",
    inchatadmin       :"", 
    datechatadmin      :Date.now()
  };
  dataSource: MatTableDataSource<Chatadmin[]>;
items: Observable<any[]>;
dataView = "table"
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  constructor(public chatappadminService :ChatappadminService) { }

  deletechatadmin(chatId) {
    this.chatappadminService.deleteChatadmin(chatId)
  }
  changeView(type) {
    this.dataView = type
  }

  ngOnInit() {
    this.chatappadminService.getListChatadmin().subscribe(chatadmins => {
      let datas = chatadmins.map((chatadmin) => {
        return ({ id: chatadmin.payload.doc.id, ...chatadmin.payload.doc.data() })
      })
      console.log(" ngOnInit() chatadmins ", datas)
      this.dataSource = new MatTableDataSource(datas);
    })
  }

  onChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.chatadmin[name] = value
  }

  saveChatadmin() {
    this.chatappadminService.saveChatadmin(this.chatadmin)
  }
  updateChatadmin() {
    this.chatappadminService.updateChatadmin(this.chatadmin)
  }

}
