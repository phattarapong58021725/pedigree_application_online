import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { RecordService } from '../../../services/dashboard/record.service';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from '@angular/material';
import { Observable, of } from 'rxjs';

import { Record } from '../../../interfaces/dashboard/record'
import { StorageService } from './../../../shared/storage.service';



@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  record: any = {
    id: null,
    cattle_Id: "",
    cattle_Name: "",
    date_of_birth: Date,
    sex: "",
    color: "",
    breeding: "",
    birth_weight: "",
    birth_chert: "",
    date_of_wean: Date,
    wean_weight: "",
    wean_chert: "",
    hip_height: "",
    fa_Name: "",
    fa_Id: "",
    ma_Name: "",
    ma_Id: "",
    breeder: "",
    owner_name: "",
    blood_type:"",
    breed:"",
    date_of_record: Date.now()
  };
  displayedColumns = ['id',
    'cattle_Id',
    'cattle_Name',
    'date_of_birth',
    'sex',
    'color',
    'breeding',
    'birth_weight',
    'birth_chert',
    'date_of_wean',
    'wean_weight',
    'wean_chert',
    'hip_height',
    'fa_Name',
    'fa_Id',
    'ma_Name',
    'ma_Id',
    'breeder',
   'blood_type',
   ' breed',
    'owner_name',
    'actions'
  ];

  file;
  record2;
  imageUrl;
  localStorageUser;

  dataSource: MatTableDataSource<Record[]>;
  items: Observable<any[]>;
  dataView = "table"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public recordService: RecordService,
    private storageService: StorageService
  ) { }

  deleteRecord(recordId) {
    this.recordService.deleteRecord(recordId)
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
    this.recordService.getListRecords().subscribe(records => {
      let datas = records.map((record) => {
        return ({ id: record.payload.doc.id, ...record.payload.doc.data() })
      })
      console.log(" ngOnInit() records ", datas)
      this.dataSource = new MatTableDataSource(datas);
    })
  }
  
  onChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.record[name] = value
  }

  saveRecord() {
    console.log(this.record);
    this.recordService.uploadPic( this.file,this.record.image_name);
  this.recordService.saveRecord(this.record);
  }
  updateRecord() {
    this.recordService.updateRecord(this.record);
  }

  onFileSelection(event) {
    this.record.image_name =  event.target.files[0].name;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.imageUrl = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
    this.file = event.target.files[0];
 
    // this.storageService.upload($event)
    //   .then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
    //     uploadSnapshot.ref.getDownloadURL().then((downloadURL) => {
    //       console.log(downloadURL);
    //       this.imageUrl = downloadURL;
    //       const data: any = {
    //         id: this.record.uid,
    //         downloadUrl: downloadURL,
    //       };
    //       this.recordService.saveRecord(data);

    //     });

    //   });

  }

}
