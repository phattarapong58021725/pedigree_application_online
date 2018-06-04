import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent} from '../../layout/app-layout/app-layout.component';

import { HomeComponent} from './home/home.component';
import {AddInvoiceComponent} from './add-invoice/add-invoice.component'
import {InvoicesComponent} from './invoices/invoices.component'

import { AuthService } from '../../services/dashboard/auth.service';


const routes: Routes = [
    { 
        path: '',
        component: AppLayoutComponent, 
        children: [
            { path: 'dashboard', component: HomeComponent },
            { path: 'invoice/add', component: AddInvoiceComponent },
            { path: 'invoices', component: InvoicesComponent },
        ],
//canActivate:[AuthService]
    },
  ];

  
@NgModule({
    
  imports: [RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
