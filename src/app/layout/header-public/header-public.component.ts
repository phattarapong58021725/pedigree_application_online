import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/dashboard/auth.service'
import{Router} from '@angular/router'

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.scss']
})
export class HeaderPublicComponent implements OnInit {

  constructor(
    public router:Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  navigate(url){
    this.router.navigateByUrl(url)
  }
 
  get currentRoute(): string {
    return this.router.url;
    
  }
}
