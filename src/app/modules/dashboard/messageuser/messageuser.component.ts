import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import { Observable, of } from 'rxjs';
import { ChatappService } from '../../../services/dashboard/chatapp.service';
import { Chat } from '../../../interfaces/dashboard/chat';

@Component({
  selector: 'app-messageuser',
  templateUrl: './messageuser.component.html',
  styleUrls: ['./messageuser.component.scss']
})
export class MessageuserComponent implements OnInit {
  chat : any = {
    id: null,
    namechat:"",
    inchat       :"", 
    datechat      :Date.now()
  };
dataSource: MatTableDataSource<Chat[]>;
items: Observable<any[]>;
dataView = "table"
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(public chatappService: ChatappService) { }

  deletechat(chatId) {
    this.chatappService.deleteChat(chatId)
  }
  changeView(type) {
    this.dataView = type
  }

  ngOnInit() {
    this.chatappService.getListChat().subscribe(chats => {
      let datas = chats.map((chat) => {
        return ({ id: chat.payload.doc.id, ...chat.payload.doc.data() })
      })
      console.log(" ngOnInit() chatapps ", datas)
      this.dataSource = new MatTableDataSource(datas);
    })
  }

  onChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.chat[name] = value
  }

  saveChat() {
    this.chatappService.saveChat(this.chat)
  }
  updateChat() {
    this.chatappService.updateChat(this.chat)
  }
  
}
