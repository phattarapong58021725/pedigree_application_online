import { Component,Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from '../../interfaces/dashboard/auth'
import { AuthService } from '../../services/dashboard/auth.service'
import { Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    @Input()
    user: any

    constructor(
        private breakpointObserver: BreakpointObserver,
        public authService:AuthService,
        private router: Router
    ) {
 
    }
    ngOnInit(){
        this.authService.getCurrentUser().subscribe(auth=>{
            if(!auth){
                this.router.navigate(['/login'])
            }
            console.log(auth)
            this.user = auth
        })
    }
    goTo(name){
        this.router.navigateByUrl(name)
    }
}
