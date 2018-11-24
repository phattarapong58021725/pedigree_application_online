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
import { ChatappService } from '../../../../services/dashboard/chatapp.service';
import { Chat } from '../../../../interfaces/dashboard/chat';

@Component({
  selector: 'app-chatdetail',
  templateUrl: './chatdetail.component.html',
  styleUrls: ['./chatdetail.component.scss']
})
export class ChatdetailComponent implements OnInit {
  displayedColumns = [
    'inchat',
  'datechat'
];
  dataSource: MatTableDataSource<Chat[]>;
  items: Observable<any[]>;
  dataView = "card"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public chatappService: ChatappService) { }

  ngOnInit() {
    this.chatappService.getListChat().subscribe(chats => {
    let datas = chats.map((chat) => {
      return ({ id: chat.payload.doc.id, ...chat.payload.doc.data() })
    })
    console.log(" ngOnInit() chatapps ", datas)
    this.dataSource = new MatTableDataSource(datas);
  })
}
deletechat(chatId) {
  this.chatappService.deleteChat(chatId)
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

}
