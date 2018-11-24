import {AuthService} from '../services/dashboard/auth.service';
import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { UserService } from '../services/dashboard/user.service';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService,
    private userService: UserService,
    ) {
}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.userService.getUser(this.authService.getAuthUser().uid).pipe(
        take(1),
        map(user => user.roles.admin ? true : false),
        tap(isAdmin => {
          if (!isAdmin) {
            console.error('Access denied - amin only allowed');
          }
        })
      );
  }
}
