import { Component, OnInit } from '@angular/core';
import { Personal } from '../../../interfaces/dashboard/personal'
import { PersonalService } from '../../../services/dashboard/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
  personale:Personal

  constructor( private personalService:  PersonalService ) { }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    let this_ = this
    this.personalService.getPersonalData()
    .subscribe(response => {
      console.log("RESSSSSSSSSSSS",response);
      this.personale = response
    });
  }

} 
