import {Component, OnInit, ViewChild} from '@angular/core';
import {
    MatPaginator,
    MatSort,
    MatTableDataSource,
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA
} from '@angular/material';

import {Invoice} from '../../../interfaces/dashboard/invoice'
import {InvoiceService} from '../../../services/dashboard/invoice.service'
import { Observable, of } from 'rxjs';

import {AddInvoiceComponent} from '../add-invoice/add-invoice.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

    displayedColumns = ['id', 'title', 'import','actions'];
    dataSource: MatTableDataSource<Invoice[]>;
    items: Observable<any[]>;
    dataView="table"
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(
        public invoiceService:InvoiceService,
        public dialog:MatDialog
    ) {}
    openDialog(dataToUpdate:any=null): void {

        let dialogRef = this.dialog.open(AddInvoiceComponent, {
            width: '250px',
            data: dataToUpdate!=null?dataToUpdate:null
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
    }
    deleteInvoice(invoiceId){
        this.invoiceService.deleteInvoice(invoiceId)
    }
    changeView(type){
        this.dataView=type
    }
    ngOnInit() {

        this.invoiceService.getListInvoices().subscribe(invoices=>{
            let datas = invoices.map((invoice)=>{
                return ({ id: invoice.payload.doc.id, ...invoice.payload.doc.data() })
            })
            console.log(" ngOnInit() invoices ",datas)
            this.dataSource = new MatTableDataSource(datas);
        })
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }
}
