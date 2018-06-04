import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './../messages/message.service';
import { Personal } from './../../interfaces/dashboard/personal'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class PersonalService {
  personaldataurl = 'http://localhost/ngapi/index.php'
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getPersonalData(): Observable<Personal> {
    return this.http.get<Personal>(this.personaldataurl,{responseType: 'json'})
    .pipe(
      catchError(this.handleError('getPersonalData'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
