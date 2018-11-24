import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/dashboard/auth.service'
import { from } from 'rxjs';


@Component({
    selector: 'app-singup',
    templateUrl: './singup.component.html',
    styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
    constructor(private authService: AuthService) { }

    selectNext(el){
        el.selectedIndex += 1;
      }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        // const fullname = form.value.fullname;
        // this.authService.createUserInFirebaseAuthList(form.value.email, form.value.password);
        this.authService.createUserInFirebaseAuthListEmailVerified(
            form.value.email, 
            form.value.password, 
            form.value.username,
            form.value.fname,
            form.value.lname,
            form.value.gender,
            form.value.ID_card,
            form.value.address,
            form.value.tel,
            form.value.mobile,
            form.value.fax,
            form.value.other_email,
            form.value.member_ID,
            form.value.farm_Name,
            form.value.farm_Logo ,
            form.value.farm_address,
            form.value.line,
            form.value.member_type
           );
    }

}
