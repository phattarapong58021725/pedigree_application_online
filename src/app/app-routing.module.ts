import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
/**
 * Public Pages
 */
import { HomeComponent as HomePublicComponent } from './public-pages/home/home.component'
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component'
import { LoginComponent } from './public-pages/login/login.component';
import { SingupComponent } from './public-pages/singup/singup.component';
import { ErrorComponent } from './public-pages/error/error.component'
import { NewsComponent } from './public-pages/news/news.component';
import { ResetPasswordComponent } from './public-pages/reset-password/reset-password.component';
import { NotificationComponent } from './public-pages/notification/notification.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const APP_ROUTES: Routes = [
    // App routes goes here here
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'record', redirectTo: '/record', pathMatch: 'full' },
            { path: 'search', redirectTo: '/search', pathMatch: 'full' },
            { path: 'order', redirectTo: '/order', pathMatch: 'full' },
            { path: 'follow', redirectTo: '/follow', pathMatch: 'full' },
            { path: 'association', redirectTo: '/association', pathMatch: 'full' },
            { path: 'userprofile', redirectTo: '/userprofile', pathMatch: 'full' },
            { path: 'recordlist', redirectTo: '/recordlist', pathMatch: 'full' },
            { path: 'recorddetail', redirectTo: '/recorddetail', pathMatch: 'full' },
            { path: 'addorder', redirectTo: '/addorder', pathMatch: 'full' },
            { path: 'addorderstatus', redirectTo: '/addorderstatus', pathMatch: 'full' },
            { path: 'addorderrefuse', redirectTo: '/addorderrefuse', pathMatch: 'full' },
            { path: 'addorderdetail', redirectTo: '/addorderdetail', pathMatch: 'full' },
            { path: 'followdetail', redirectTo: '/followdetail', pathMatch: 'full' },
            { path: 'report', redirectTo: '/report', pathMatch: 'full' },
            { path: 'associationreport', redirectTo: '/associationreport', pathMatch: 'full' },
            { path: 'associationdashbord', redirectTo: '/associationdashbord', pathMatch: 'full' },
            { path: 'comfirmorder', redirectTo: '/comfirmorder', pathMatch: 'full'},
            { path: 'messageuser', redirectTo: '/messageuser', pathMatch: 'full' },
            { path: 'messageofficer', redirectTo: '/messageofficer', pathMatch: 'full' },
            { path: 'adminsetting', redirectTo: '/adminsetting', pathMatch: 'full' },
            { path: 'usersetting', redirectTo: '/usersetting', pathMatch: 'full' },
            { path: 'cattlesetting', redirectTo: '/cattlesetting', pathMatch: 'full' },
            { path: 'banksetting', redirectTo: '/banksetting', pathMatch: 'full'},
            { path: 'chatdetail', redirectTo: '/chatdetail', pathMatch: 'full'},
            { path: 'chatdetailofficer', redirectTo: '/chatdetailofficer', pathMatch: 'full'},
            { path: 'userroles', redirectTo: '/userroles', pathMatch: 'full'},
            { path: 'cattleonoff', redirectTo: '/cattleonoff', pathMatch: 'full'},
            { path: 'addcolors', redirectTo: '/addcolors', pathMatch: 'full'},
            { path: 'allpange', redirectTo: '/allpange', pathMatch: 'full'},
            { path: 'cattlecolor', redirectTo: '/cattlecolor', pathMatch: 'full'},
            {path: 'member', redirectTo: '/member', pathMatch: 'full'},
            {path: 'addressmember', redirectTo: '/addressmember', pathMatch: 'full'},
            {path: 'payment', redirectTo: '/payment', pathMatch: 'full'},
            {path: 'inputaddress', redirectTo: '/inputaddress', pathMatch: 'full'},
            {path: 'waitconfirm', redirectTo: '/waitconfirm', pathMatch: 'full'},
            {path: 'addorder1', redirectTo: '/addorder1', pathMatch: 'full'},
            {path: 'addorder2', redirectTo: '/addorder2', pathMatch: 'full'},
            {path: 'addorder3', redirectTo: '/addorder3', pathMatch: 'full'},
            {path: 'addorder4', redirectTo: '/addorder4', pathMatch: 'full'},
            {path: 'addorder5', redirectTo: '/addorder5', pathMatch: 'full'},
            {path: 'atm', redirectTo: '/atm', pathMatch: 'full'},
            {path: 'mobilebanking', redirectTo: '/mobilebanking', pathMatch: 'full'},
            {path: 'cashondeli', redirectTo: '/cashondeli', pathMatch: 'full'},
            {path: 'reportrecord', redirectTo: '/reportrecord', pathMatch: 'full'},
            {path: 'reportorder', redirectTo: '/reportorder', pathMatch: 'full'},
            {path: 'associationprofile', redirectTo: '/associationprofile', pathMatch: 'full'},

            {path: 'dialogatm1', redirectTo: '/dialogatm1', pathMatch: 'full'},
            {path: 'dialogatm2', redirectTo: '/dialogatm2', pathMatch: 'full'},
            {path: 'dialogatm3', redirectTo: '/dialogatm3', pathMatch: 'full'},
            {path: 'dialogatm4', redirectTo: '/dialogatm4', pathMatch: 'full'},
            {path: 'dialogatm5', redirectTo: '/dialogatm5', pathMatch: 'full'},
            {path: 'allorder', redirectTo: '/allorder', pathMatch: 'full'},
        ]
    },
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: 'home', component: HomePublicComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'singup', component: SingupComponent },
    { path: 'resetpw', component: ResetPasswordComponent },
    { path: 'news', component: NewsComponent },
    { path: 'not-found', component: ErrorComponent },
    { path: 'notification', component: NotificationComponent },
    { path: '**', redirectTo: "not-found" }

];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
