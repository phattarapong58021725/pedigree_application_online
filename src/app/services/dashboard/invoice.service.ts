import { Injectable,Input } from '@angular/core';
import { AngularFireDatabase,AngularFireObject} from 'angularfire2/database';
import { 
    AngularFirestore, 
    AngularFirestoreDocument,
    AngularFirestoreCollection
  } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

import { map, count } from 'rxjs/operators';


import {MatSnackBar} from '@angular/material';
import { SnackBarMessageComponent } from '../../helpers/snack-bar-message/snack-bar-message.component'
import {Invoice} from '../../interfaces/dashboard/invoice'
import {AuthService} from '../../services/dashboard/auth.service'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
    @Input()
    invoicesCollection: AngularFirestoreCollection<any[]>;
    invoices:Observable<any> 
    durationSback:number = 4000
    user:any
    constructor(
        private db:AngularFirestore,
        public snackBar: MatSnackBar,
        public authService:AuthService
    ) { }

    getListInvoices(){
        this.invoicesCollection = this.db.collection('invoices',ref=>ref.where('uid','==',this.authService.getUserId()))
        this.invoices =  this.invoicesCollection.snapshotChanges()
        return  this.invoices
    }
    saveInvoice(data){

        if(data.title=="" || data.import==""){
            this.showSnack({message:"Title or Import is empty!",type:"error"})
        }else{
            this.authService.getCurrentUserId(uid=>{
                let dataToSave:any = {
                    title:data.title,
                    import:data.import,
                    uid:uid
                }
                this.invoicesCollection.add(dataToSave).then(()=>{
                    this.showSnack({message:"Invoice saved succesfully",type:"success"})
                }).catch( ()=>{
                    this.showSnack({message:"Error, Please check again",type:"error"})
                })
            })

        }
    }
    updateInvoice(data){

        if(data.title=="" || data.import==""){
            this.showSnack({message:"Title or Import is empty!",type:"error"})
        }else{
            this.authService.getCurrentUserId(uid=>{

                let dataToUpdate:any = {
                    title:data.title,
                    import:data.import,
                    uid:uid
                }

                this.invoicesCollection.doc(data.id).update(dataToUpdate).then(()=>{
                    this.showSnack({message:"Invoice updated succesfully",type:"success"})
                }).catch( ()=>{
                    this.showSnack({message:"Error, Please check again",type:"error"})
                })
            })

        }
    }
    deleteInvoice(id){
        this.db.firestore.collection('invoices').doc(id).delete().then(()=>{
            this.showSnack({message:"Invoice deleted succesfully",type:"success"})
        }).catch(()=>{
            this.showSnack({message:"Error, Please check again",type:"error"})
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
