import { Component } from '@angular/core';
import {InvoiceService} from '../../../services/dashboard/invoice.service';

@Component({
  selector: 'dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    cards = [
        { title: 'Total Invoices', cols: 1, rows: 1, type:"card_total_invoices",total:"0",load:false },
        { title: 'Total Import', cols: 1, rows: 1,type:"card_total_import",total:"0",load:false }
    ];
    constructor(public invoiceService : InvoiceService ){
        this.invoiceService.getListInvoices().subscribe(invoices=>{
            let datas = invoices.map((invoice)=>{
                return ({ id: invoice.payload.doc.id, ...invoice.payload.doc.data() })
            })
            if(datas.length == 0){
                this.cards.map((row)=>{
                    row.load  = true
                    row.total =row.type=="card_total_import" ? row.total+" $" :  row.total
                })
            }
            datas.map((invoice)=>{
                this.cards.map((row)=>{

                    if(row.type=="card_total_invoices"){
                        row.total = datas.length
                        row.load  = true
                    }
    
                    if(row.type=="card_total_import"){
                        let total_money = 0
                        total_money +=invoice.import
                        row.total = total_money + " $"
                        row.load  = true
                    }

                })
            })
        })
    }
    removeCard(type){
        this.cards = this.cards.filter(card => card.type!=type)
    }

}
