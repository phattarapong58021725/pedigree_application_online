import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from './../../shared/notification.service';
import {AuthService} from '../../services/dashboard/auth.service'
import { AuthGuard } from '../../guards/auth.guard';
import { AdminGuard } from '../../guards/admin.guard';
import {FormControl, FormGroupDirective,Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import swal from 'sweetalert2'
import { SuperadminGuard } from '../../guards/superadmin.guard';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  options =['test','test2'];

  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.nullValidator
  ]);

  matcher = new MyErrorStateMatcher();

  user = {
      email:'',
      password:""
  }
    constructor(private authService: AuthService, private router: Router, private notifier: NotificationService) { }

    ngOnInit() {
    }
  
    onSubmit(form: NgForm) {
      this.authService.loginWithUserPassword(form.value.email, form.value.password)
        .then( userData => {

          if (userData && userData.user.emailVerified) {
            //  swal("ยินดีต้อนรับเข้าสู่ระบบ", "" ,"success");
              if(AuthGuard){
                this.router.navigate([ '/dashboard' ]); 
              }
             if(AdminGuard)
              {
                this.router.navigate([ '/associationdashbord' ]);
              }
              else
              {
                this.router.navigate([ '/adminsetting' ]);
              }
              // https://stackoverflow.com/questions/45025334/how-to-use-router-navigatebyurl-and-router-navigate-in-angular
              // this.router.navigate(['/login']);
            }
         else {
            swal('เกิดข้อผิดพลาดในการเข้าระบบ', 'คุณต้องยืนยันที่อยู่อีเมลก่อน', 'warning');
          }
  
        })
        .catch( err => {
          console.log('error bs: ' + err);
          swal('เกิดข้อผิดพลาด', '', 'error');
        });
    }
  
  }
  