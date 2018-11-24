import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SettingComponent } from './setting/setting.component';
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

import { OrderModule } from 'ngx-order-pipe';


import { Dialogatm1Component } from './payment/atm/dialogatm1/dialogatm1.component';
import { Dialogatm2Component } from './payment/atm/dialogatm2/dialogatm2.component';
import { Dialogatm3Component } from './payment/atm/dialogatm3/dialogatm3.component';
import { Dialogatm4Component } from './payment/atm/dialogatm4/dialogatm4.component';
import { Dialogatm5Component } from './payment/atm/dialogatm5/dialogatm5.component';
import { AllOrderComponent } from './all-order/all-order.component';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OrderModule
  ],
  declarations: [
    HomeComponent,
    RecordComponent,
    OrderComponent,
    SearchComponent,
    UserProfileComponent,
    UserEditFromComponent,
    FollowComponent,
    AssociationComponent,
    RecordListComponent,
    RecordDetailComponent,
    AddOrderComponent,
    AssOrderstatusComponent,
    AssOrderrefuseComponent,
    AssOrderdetailComponent,
    FollowDetailComponent,
    ReportComponent,
    SettingComponent,
    AssociationReportComponent,
    AssociationDashbordComponent,
    ConfirmOrderComponent,
    MessageuserComponent,
    MessageofficerComponent,
    AdminsettingComponent,
    BanksettingComponent,
    CattlesettingComponent,
    UsersettingComponent,
    ChatdetailComponent,
    ChatdetailofficerComponent,
    UserrolesComponent,
    CattleonoffComponent,
    AddcolorsComponent,
    AllpangeComponent,
    CattlecolorComponent,
    MemberComponent,
    AddressmemberComponent,
    PaymentComponent,
    InputaddressmemberComponent,
    WaitConfirmComponent,
    AddOrder1Component,
    AddOrder2Component,
    AddOrder3Component,
    AddOrder4Component,
    AddOrder5Component,
    AtmComponent,
    MobilebankingComponent,
    CashondeliComponent,
    ReportrecordComponent,
    ReportorderComponent,
    AssociationProfileComponent,
    Dialogatm1Component,
    Dialogatm2Component,
    Dialogatm3Component,
    Dialogatm4Component,
    Dialogatm5Component,
    AllOrderComponent,


  ]
})
export class DashboardModule { }
