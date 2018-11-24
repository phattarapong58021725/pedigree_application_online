import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SettingService } from '../../../../../services/dashboard/setting.service';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { Observable, of } from 'rxjs';

import { Setting } from '../../../../../interfaces/dashboard/setting'
import { CattleonoffComponent } from '../../../adminsetting/cattlesetting/cattleonoff/cattleonoff.component';
import { AddcolorsComponent } from '../../../adminsetting/cattlesetting/addcolors/addcolors.component';
@Component({
  selector: 'app-cattlecolor',
  templateUrl: './cattlecolor.component.html',
  styleUrls: ['./cattlecolor.component.scss']
})
export class CattlecolorComponent implements OnInit {

  setting: any = {
    id: null,
    hidden: "true",
    cattlename:"",
    colors:""
  };
  displayedColumns = ['id',
    'hidden',
    // 'hidden1',
    // 'hidden2',
    // 'hidden3',
    // 'hidden4',
    // 'hidden5',
    // 'hidden6',
    // 'hidden7',
    // 'hidden8',
    'cattlename',
    'colors',
    'actions'];
    
  dataSource: MatTableDataSource<Setting[]>;
  items: Observable<any[]>;
  dataView = "table"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public settingService: SettingService,public dialog: MatDialog) { }

  openDialog(dataToUpdate: any = null): void {

    let dialogRef = this.dialog.open(CattleonoffComponent, {
      height: '350px',
      width: '500px',
      data: dataToUpdate != null ? dataToUpdate : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(dataToUpdate: any = null): void {

    let dialogRef = this.dialog.open(AddcolorsComponent, {
      height: '350px',
      width: '500px',
      data: dataToUpdate != null ? dataToUpdate : null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
    this.settingService.getListSettings().subscribe(settings => {
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

  deleteSetting(settingId) {
    this.settingService.deleteSetting(settingId)
  }
  saveSetting() {
    this.settingService.saveSetting(this.setting)
  }
  updateSetting() {
    this.settingService.updateSetting(this.setting)
  }

}
