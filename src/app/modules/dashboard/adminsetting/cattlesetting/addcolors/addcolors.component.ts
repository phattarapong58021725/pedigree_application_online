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

@Component({
  selector: 'app-addcolors',
  templateUrl: './addcolors.component.html',
  styleUrls: ['./addcolors.component.scss']
})
export class AddcolorsComponent implements OnInit {
  setting: any = {
    id: null,
    hidden: "",
    cattlename:"",
    colors:""
  };
  
  constructor(public settingService: SettingService, public dialogRef: MatDialogRef<AddcolorsComponent>,
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

}
