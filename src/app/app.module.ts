import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/messages/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './helpers/messages/messages.component';

import { LoginComponent } from './public-pages/login/login.component';
import { SingupComponent } from './public-pages/singup/singup.component';
import { ErrorComponent } from './public-pages/error/error.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkTableModule } from '@angular/cdk/table';
/**
 * Firebase
 */
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { OrderModule } from 'ngx-order-pipe';


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

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SnackBarMessageComponent } from './helpers/snack-bar-message/snack-bar-message.component';
import { HomeComponent } from './public-pages/home/home.component';
import { HeaderPublicComponent } from './layout/header-public/header-public.component';
import { NewsComponent } from './public-pages/news/news.component';

import { AuthService } from './services/dashboard/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/dashboard/user.service';
import { NotificationService} from './shared/notification.service';
import { StorageService} from './shared/storage.service';
import { ResetPasswordComponent } from './public-pages/reset-password/reset-password.component';
import { NotificationComponent } from './public-pages/notification/notification.component';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/dashboard/api.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'pedigreeonline'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    CdkTableModule,
    OrderModule,
    HttpModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
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
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    DashboardModule,
    DashboardRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  entryComponents: [SnackBarMessageComponent],
  declarations: [
    AppComponent,
    MessagesComponent,
    LoginComponent,
    SingupComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent,
    PublicLayoutComponent,
    SidebarComponent,
    SnackBarMessageComponent,
    HomeComponent,
    HeaderPublicComponent,
    NewsComponent,
    ResetPasswordComponent,
    NotificationComponent,
  ],
  providers: [AuthService, AuthGuard, UserService, NotificationService, StorageService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
