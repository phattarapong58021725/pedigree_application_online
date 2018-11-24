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
import { ChatappadminService } from '../../../../services/dashboard/chatappadmin.service';
import { Chatadmin } from '../../../../interfaces/dashboard/chatadmin';

@Component({
  selector: 'app-chatdetailofficer',
  templateUrl: './chatdetailofficer.component.html',
  styleUrls: ['./chatdetailofficer.component.scss']
})
export class ChatdetailofficerComponent implements OnInit {
  displayedColumns = [
    'inchatadmin',
  'datechatadmin'
];
dataSource: MatTableDataSource<Chatadmin[]>;
  items: Observable<any[]>;
  dataView = "card"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public chatappadminService : ChatappadminService ) { }

  ngOnInit() {
    this.chatappadminService.getListChatadmin().subscribe(chatadmins => {
    let datas = chatadmins.map((chatadmin) => {
      return ({ id: chatadmin.payload.doc.id, ...chatadmin.payload.doc.data() })
    })
    console.log(" ngOnInit() chatappadmins ", datas)
    this.dataSource = new MatTableDataSource(datas);
  })
}
deletechat(chatadminId) {
  this.chatappadminService.deleteChatadmin(chatadminId)
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
