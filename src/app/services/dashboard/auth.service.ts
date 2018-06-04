import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Validators} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { auth } from 'firebase/app';
import {MatSnackBar} from '@angular/material';
import { SnackBarMessageComponent } from '../../helpers/snack-bar-message/snack-bar-message.component'

import {User} from '../../interfaces/dashboard/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    durationSback:number = 4000
    user:User
    auth:any
  constructor(
      public af:AngularFireAuth,
      private db:AngularFireDatabase,
      private router: Router,
      public snackBar: MatSnackBar
  ) { 

    }
    canActivate(): Observable<boolean> {
        return Observable.call(this.af)
          .take(1)
          .map(state => !!state)
          .do(authenticated => {
            if(!authenticated){
                this.router.navigate([ '/login' ])
            }
        })
    }
    /**
     * Return id like lDXixxciCIe5ww0Ptyjtyjny1Z
     */
    getUserId(){
        return  this.af.auth.currentUser.uid
    }
    getCurrentAuth(){
        return this.af
    }
    getCurrentUser(){
        return this.af.authState
    }
    getCurrentUserId(callback:Function){
        this.af.authState.subscribe(auth=>{
            callback(auth.uid)
        })
    }
    loginWithCredetentials(user){
        if(user.email=="" || user.password==""){
            this.showSnack({message:"Email or password is empty",type:"error"})
        }else{
            this.af.auth.signInWithEmailAndPassword(user.email,user.password).then(success=>{
                this.user = success
                this.showSnack({message:"Logged succesfully.",type:"success"})
                
                var this_ = this;
                setTimeout(function () { this_.router.navigate(['/dashboard']) }, 50);
            }).catch(error=>{
                error.type="error"
                this.showSnack(error)
            });
        }

    }
    loginWithGoogle(){
        this.af.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(success=>{
            this.user = success.user
            this.saveUser()
            this.showSnack({message:"Logged succesfully.",type:"success"})
            var this_ = this;
            setTimeout(function () { this_.router.navigate(['/dashboard']) }, 50);
        }).catch(error=>{
            this.showSnack(error)
        })
    }
    logOutFromGoogle(){
        this.af.auth.signOut()
    }
    singUpCustom(userData){

        if(userData.email=="" || userData.password==""){
            this.showSnack({message:"Email or password is empty",type:"error"})
        }else{
            this.af.auth.createUserWithEmailAndPassword(userData.email,userData.password).then(success=>{
                this.user = success.user

                this.db.object('/users/'+this.user.uid).set({
                    name    :userData.name,
                    subname :userData.subname,
                    displayName:this.user.displayName,
                    email   :this.user.email,
                    uid     :this.user.uid,
                    photoURL:this.user.photoURL
                }).then(function(success){
                    if(success){
                        this.showSnack({message:"SingUp succesfully.",type:"success"})
                        this.router.navigate(['/login'])
                    }
                })

            }).catch(error=>{
                error.type="error"
                this.showSnack(error)
            });
        }
    }
    saveUser(){
        this.db.object('/users/'+this.user.uid).set({
            name    :"",
            subname :"",
            displayName:this.user.displayName,
            email   :this.user.email,
            uid     :this.user.uid,
            photoURL:this.user.photoURL

        }).then(function(success){
            if(success){
                this.showSnack({message:"User Logged Successfully",type:'success'})
            }
        })
    }
    
    /**
     * 
     * @param data The data to pass to the snackKomponent
     * @param time the duration
     */
    showSnack(data:any,time:number=null){

        if(time){
            this.durationSback = time
        }
        this.snackBar.openFromComponent(SnackBarMessageComponent, {
            duration:this.durationSback,
            data: data,
            horizontalPosition:'right',
            verticalPosition:'top'
        });
    }
}


