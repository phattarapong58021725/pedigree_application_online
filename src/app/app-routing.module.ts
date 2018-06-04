import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent} from './layout/app-layout/app-layout.component';

import { HeroesComponent }      from './modules/heroes-dashboard/heroes/heroes.component';
import { HeroDetailComponent }  from './modules/heroes-dashboard/hero-detail/hero-detail.component';

import { PersonalComponent }      from './modules/dashboard/personal/personal.component';

import{HeaderComponent} from './layout/header/header.component';


/**
 * Public Pages
 */
import{HomeComponent as HomePublicComponent} from './public-pages/home/home.component'
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component'
import { LoginComponent }        from './public-pages/login/login.component';
import { SingupComponent }        from './public-pages/singup/singup.component';
import {ErrorComponent} from './public-pages/error/error.component'
 

const routes: Routes = [
    // App routes goes here here
    {
        path:'',
        component:AppLayoutComponent,
        children:[
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'invoices', redirectTo: '/invoices', pathMatch: 'full' }
            
        ]
    },
    {
        path:'',
        component:PublicLayoutComponent,
        children:[
            { path: 'home',component:HomePublicComponent },
        ]
    },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'login', component: LoginComponent },
    { path: 'singup', component: SingupComponent },
    { path: 'not-found', component: ErrorComponent },
    { path: '**', redirectTo: "not-found" }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
