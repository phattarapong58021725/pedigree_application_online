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
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
    user = {
        name:"",
        subname:"",
        email:"",
        password:"",
    }
    nameFormControl = new FormControl('', [
        Validators.required,
    ]);

    subnameFormControl = new FormControl('', [
        Validators.required
    ]);

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4)
    ]);

    matcher = new MyErrorStateMatcher();

    constructor(public authService:AuthService) { }
   
    singUp(){
        this.authService.singUpCustom(this.user)
    }
    ngOnInit() {

    }
    onChange(event){
        this.user[event.target.name] = event.target.value
    }

}
