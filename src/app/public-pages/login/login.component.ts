import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

/**
 * Import Service
 */
import {AuthService} from '../../services/dashboard/auth.service'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    options =['test','test2'];

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.nullValidator
    ]);

    matcher = new MyErrorStateMatcher();

    user = {
        email:'',
        password:""
    }

    constructor( 
        public af:AngularFireAuth,
        public authService:AuthService
    ) {}

 
    login(){
        console.log(this.user)
        this.authService.loginWithCredetentials(this.user)
    }

    loginGoogle(){
        this.authService.loginWithGoogle()
    }

    ngOnInit() {
        console.log(this.af.user)
    }
    onChange(event){
        this.user[event.target.name] = event.target.value
    }  

}
