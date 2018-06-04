import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from '../../interfaces/dashboard/auth'
import { AuthService } from '../../services/dashboard/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    app_title="Engine Personal Bank"

    constructor(
        private breakpointObserver: BreakpointObserver,
        public authService:AuthService,
        private router: Router
    ) {
 
    }
    signOut(){
        this.authService.logOutFromGoogle()
    }
}
