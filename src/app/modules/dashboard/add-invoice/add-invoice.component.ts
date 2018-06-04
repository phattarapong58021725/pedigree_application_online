import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {InvoiceService} from '../../../services/dashboard/invoice.service'

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {
    invoice:any = {
        id:null,
        title:"",
        import:""
    };

    constructor(
        public invoiceService:InvoiceService,
        public dialogRef: MatDialogRef<AddInvoiceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any=null) { 
            
            if(data){
                this.invoice = data
            }
        }
    
    onNoClick(): void {
        this.dialogRef.close();
    }
    ngOnInit() {

    }
    onChange(event){
        let value = event.target.value
        let name  = event.target.name
        this.invoice[name] = value
    }

    saveInvoice(){
        this.invoiceService.saveInvoice(this.invoice)
    }
    updateInvoice(){
        this.invoiceService.updateInvoice(this.invoice)
    }


}
