import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from '../../layout/app-layout/app-layout.component';

import { HomeComponent } from './home/home.component';
import { RecordComponent } from './record/record.component';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditFromComponent } from './user-profile/user-edit-from/user-edit-from.component';
import { FollowComponent } from './follow/follow.component';
import { AssociationComponent } from './association/association.component';
import { RecordListComponent } from './record/record-list/record-list.component';
import { RecordDetailComponent } from './record/record-detail/record-detail.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { AssOrderstatusComponent } from './association/ass-orderstatus/ass-orderstatus.component';
import { AssOrderrefuseComponent } from './association/ass-orderrefuse/ass-orderrefuse.component';
import { AssOrderdetailComponent } from './association/ass-orderdetail/ass-orderdetail.component';
import { FollowDetailComponent } from './follow/follow-detail/follow-detail.component';
import { ReportComponent } from './report/report.component';
import { AssociationReportComponent } from './association-report/association-report.component';
import { AssociationDashbordComponent } from './association-dashbord/association-dashbord.component';
import { ConfirmOrderComponent } from './order/confirm-order/confirm-order.component';
import { MessageuserComponent } from './messageuser/messageuser.component';
import { MessageofficerComponent } from './messageofficer/messageofficer.component';
import { AdminsettingComponent } from './adminsetting/adminsetting.component';
import { BanksettingComponent } from './adminsetting/banksetting/banksetting.component';
import { CattlesettingComponent } from './adminsetting/cattlesetting/cattlesetting.component';
import { UsersettingComponent } from './adminsetting/usersetting/usersetting.component';
import { ChatdetailComponent } from './messageuser/chatdetail/chatdetail.component';
import { ChatdetailofficerComponent } from './messageofficer/chatdetailofficer/chatdetailofficer.component';
import { UserrolesComponent } from './adminsetting/usersetting/userroles/userroles.component';
import { CattleonoffComponent } from './adminsetting/cattlesetting/cattleonoff/cattleonoff.component';
import { AddcolorsComponent } from './adminsetting/cattlesetting/addcolors/addcolors.component';
import { AllpangeComponent } from './order/allpange/allpange.component';
import { CattlecolorComponent } from './adminsetting/cattlesetting/cattlecolor/cattlecolor.component';
import { MemberComponent } from './order/member/member.component';
import { AddressmemberComponent } from './addressmember/addressmember.component';
import { PaymentComponent } from './payment/payment.component';
import { InputaddressmemberComponent } from './addressmember/inputaddressmember/inputaddressmember.component';
import { WaitConfirmComponent } from './order/wait-confirm/wait-confirm.component';
import { AddOrder1Component } from './order/add-order1/add-order1.component';
import { AddOrder2Component } from './order/add-order2/add-order2.component';
import { AddOrder3Component } from './order/add-order3/add-order3.component';
import { AddOrder4Component } from './order/add-order4/add-order4.component';
import { AddOrder5Component } from './order/add-order5/add-order5.component';
import { AtmComponent } from './payment/atm/atm.component';
import { MobilebankingComponent } from './payment/mobilebanking/mobilebanking.component';
import { CashondeliComponent } from './payment/cashondeli/cashondeli.component';
import { ReportrecordComponent } from './report/reportrecord/reportrecord.component';
import { ReportorderComponent } from './report/reportorder/reportorder.component';
import { AssociationProfileComponent } from './association-profile/association-profile.component';
import { Dialogatm1Component } from './payment/atm/dialogatm1/dialogatm1.component';
import { Dialogatm2Component } from './payment/atm/dialogatm2/dialogatm2.component';
import { Dialogatm3Component } from './payment/atm/dialogatm3/dialogatm3.component';
import { Dialogatm4Component } from './payment/atm/dialogatm4/dialogatm4.component';
import { Dialogatm5Component } from './payment/atm/dialogatm5/dialogatm5.component';
import { AllOrderComponent } from './all-order/all-order.component';

import { AuthGuard } from '../../guards/auth.guard';
import { AdminGuard } from '../../guards/admin.guard';
import { SuperadminGuard } from '../../guards/superadmin.guard';


const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'record', component: RecordComponent, canActivate: [AuthGuard] },
            { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
            { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
            { path: 'follow', component: FollowComponent, canActivate: [AuthGuard] },
            { path: 'association', component: AssociationComponent, canActivate: [AdminGuard] },
            { path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },
            { path: 'usereditfrom', component: UserEditFromComponent, canActivate: [AuthGuard] },
            { path: 'recordlist', component: RecordListComponent, canActivate: [AuthGuard] },
            { path: 'recorddetail', component: RecordDetailComponent, canActivate: [AuthGuard] },
            { path: 'addorderstatus', component: AssOrderstatusComponent, canActivate: [AuthGuard] },
            { path: 'addorderrefuse', component: AssOrderrefuseComponent, canActivate: [AuthGuard] },
            { path: 'addorderdetail', component: AssOrderdetailComponent, canActivate: [AuthGuard] },
            { path: 'followdetail', component: FollowDetailComponent, canActivate: [AuthGuard] },
            { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
            { path: 'associationreport', component: AssociationReportComponent, canActivate: [AdminGuard] },
            { path: 'associationdashbord', component: AssociationDashbordComponent, canActivate: [AdminGuard] },
            { path: 'comfirmorder', component: ConfirmOrderComponent, canActivate: [AuthGuard] },
            { path: 'messageuser', component: MessageuserComponent, canActivate: [AuthGuard]},
            { path: 'messageofficer', component: MessageofficerComponent,canActivate: [AdminGuard]},
            { path: 'adminsetting', component: AdminsettingComponent,canActivate: [SuperadminGuard] },
            { path: 'usersetting', component: UsersettingComponent,canActivate: [SuperadminGuard] },
            { path: 'cattlesetting', component: CattlesettingComponent,canActivate: [SuperadminGuard] },
            { path: 'banksetting', component: BanksettingComponent,canActivate: [SuperadminGuard] },
            { path: 'chatdetail', component: ChatdetailComponent,canActivate: [AuthGuard] },
            { path: 'chatdetailofficer', component: ChatdetailofficerComponent,canActivate: [AdminGuard] },
            { path: 'userroles', component: UserrolesComponent,canActivate: [AdminGuard] },
            { path: 'cattleonoff', component: CattleonoffComponent,canActivate: [AdminGuard] },
            { path: 'addcolors', component: AddcolorsComponent,canActivate: [AdminGuard] },
            { path: 'allpange', component: AllpangeComponent,canActivate: [AuthGuard] },
            {path: 'cattlecolor', component: CattlecolorComponent,canActivate: [AdminGuard] },
            { path: 'member', component: MemberComponent,canActivate: [AuthGuard] },
            { path: 'addressmember', component: AddressmemberComponent,canActivate: [AuthGuard] },
            { path: 'payment', component: PaymentComponent,canActivate: [AuthGuard] },
            { path: 'inputaddress', component: InputaddressmemberComponent,canActivate: [AuthGuard] },
            { path: 'waitconfirm', component: WaitConfirmComponent,canActivate: [AuthGuard] },
            { path: 'addorder', component: AddOrderComponent, canActivate: [AuthGuard] },
            { path: 'addorder1', component: AddOrder1Component, canActivate: [AuthGuard] },
            { path: 'addorder2', component: AddOrder2Component, canActivate: [AuthGuard] },
            { path: 'addorder3', component: AddOrder3Component, canActivate: [AuthGuard] },
            { path: 'addorder4', component: AddOrder4Component, canActivate: [AuthGuard] },
            { path: 'addorder5', component: AddOrder5Component, canActivate: [AuthGuard] },            
            { path: 'atm', component: AtmComponent, canActivate: [AuthGuard] },   
            { path: 'mobilebanking', component: MobilebankingComponent, canActivate: [AuthGuard] },   
            { path: 'cashondeli', component: CashondeliComponent, canActivate: [AuthGuard] },           
            { path: 'reportrecord', component: ReportrecordComponent, canActivate: [AuthGuard] },   
            { path: 'reportorder', component: ReportorderComponent, canActivate: [AuthGuard] },   
            { path: 'associationprofile', component: AssociationProfileComponent,canActivate: [AdminGuard] },

            { path: 'dialogatm1', component: Dialogatm1Component, canActivate: [AuthGuard] },   
            { path: 'dialogatm2', component: Dialogatm2Component, canActivate: [AuthGuard] },   
            { path: 'dialogatm3', component: Dialogatm3Component, canActivate: [AuthGuard] },   
            { path: 'dialogatm4', component: Dialogatm4Component, canActivate: [AuthGuard] },   
            { path: 'dialogatm5', component: Dialogatm5Component, canActivate: [AuthGuard] }, 
            { path: 'allorder', component: AllOrderComponent, canActivate: [AuthGuard] },  
        ],
    },
];


@NgModule({

    imports: [RouterModule.forChild(routes)],
    providers: [AuthGuard,AdminGuard],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
