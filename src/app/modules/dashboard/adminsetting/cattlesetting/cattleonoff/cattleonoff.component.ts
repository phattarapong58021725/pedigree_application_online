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

export interface Role1 {
  value: boolean;
  viewValue: string;
}

export interface Role2{
  value2: boolean;
  viewValue2: string;
}


@Component({
  selector: 'app-cattleonoff',
  templateUrl: './cattleonoff.component.html',
  styleUrls: ['./cattleonoff.component.scss']
})
export class CattleonoffComponent implements OnInit {
  setting: any = {
    id: null,
    hidden: "",
    hidden1: "",
    // hidden2: "",
    // hidden3: "",
    // hidden4: "",
    // hidden5: "",
    // hidden6: "",
    // hidden7: "",
    // hidden8: "",
  };
  
  constructor(public settingService: SettingService, public dialogRef: MatDialogRef<CattleonoffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = null) {

    if (data) {
        this.setting = data
    }
}

onNoClick(): void {
  this.dialogRef.close();
}

  ngOnInit() {
  }

  onChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setting[name] = value
  }

  

  saveSetting() {
    this.settingService.saveSetting(this.setting)
  }
  updateSetting() {
    this.settingService.updateSetting(this.setting)
  }

  selectedValue: boolean;
  selectedValue2: boolean;

  role1s: Role1[] = [
    {value: false, viewValue: 'เปิดการสั่งทำ'},
    {value: true, viewValue: 'ปิดการสั่งทำ'}

  ];

  role2s: Role2[] = [
    {value2: true, viewValue2: 'เปิดการใช้งาน'},
    {value2: false, viewValue2: 'ปิดการใช้งาน'}
  ];

}
