import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.scss']
})
export class HeaderPublicComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  navigate(url){
    this.router.navigateByUrl(url)
  }

}
