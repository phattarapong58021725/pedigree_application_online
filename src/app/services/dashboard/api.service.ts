import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from '../../../environments/environment';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : Http) { }

  showData(){
   return  this.http.get(api.url + '/api/show').pipe(map(res => res.json()));
  }

  
}
