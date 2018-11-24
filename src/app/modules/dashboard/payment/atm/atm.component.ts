import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { Observable, of } from 'rxjs';

import { SettingService } from '../../../../services/dashboard/setting.service';
import { Setting } from '../../../../interfaces/dashboard/setting'

import { Dialogatm1Component } from '../../payment/atm/dialogatm1/dialogatm1.component';
import { Dialogatm2Component } from '../../payment/atm/dialogatm2/dialogatm2.component';
import { Dialogatm3Component } from '../../payment/atm/dialogatm3/dialogatm3.component';
import { Dialogatm4Component } from '../../payment/atm/dialogatm4/dialogatm4.component';
import { Dialogatm5Component } from '../../payment/atm/dialogatm5/dialogatm5.component';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit {
setting:any;
  
  constructor(
    public settingService: SettingService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.settingService.getListsettingsall().subscribe(settings => {
      let datas = settings.map((setting) => { 
        return ({ id: setting.payload.doc.id, ...setting.payload.doc.data() })
      })
      datas.forEach(element => {
          this.setting = element;
      });
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(Dialogatm1Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openDialog1() {
    const dialogRef = this.dialog.open(Dialogatm2Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2() {
    const dialogRef = this.dialog.open(Dialogatm3Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog3() {
    const dialogRef = this.dialog.open(Dialogatm4Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog4() {
    const dialogRef = this.dialog.open(Dialogatm5Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
