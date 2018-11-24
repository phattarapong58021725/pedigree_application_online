import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SettingService } from '../../../../services/dashboard/setting.service';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';

export interface Role2{
  value2: boolean;
  viewValue2: string;
}

@Component({
  selector: 'app-banksetting',
  templateUrl: './banksetting.component.html',
  styleUrls: ['./banksetting.component.scss']
})
export class BanksettingComponent implements OnInit {
  setting: any = {
    id: null,
    bank : "",
    bank1:"",
    bank2:"",
    bank3:"",
    bank4:"",
    bookbank:"",
    bookbank1:"",
    bookbank2:"",
    bookbank3:"",
    bookbank4:"",
    bookbank_type:"",
    bookbank_type1:"",
    bookbank_type2:"",
    bookbank_type3:"",
    bookbank_type4:"",


  };
  constructor(public settingService: SettingService, public dialogRef: MatDialogRef<BanksettingComponent>,
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

  selectedValue2: boolean;

  
  role2s: Role2[] = [
    {value2: true, viewValue2: 'เปิดการใช้งานธนาคาร'},
    {value2: false, viewValue2: 'ปิดการใช้งานธนาคาร'}
  ];

}
