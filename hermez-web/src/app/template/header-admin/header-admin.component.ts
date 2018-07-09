import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth-service/auth.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  showNavBar: Boolean = false;
  openNavBar: Boolean = false;

  constructor(private router: Router) {
  }

  public toggleNavBar() {
    this.openNavBar = !this.openNavBar;
  }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(['/signin']);
  }

  ngOnInit() {
    if (AuthService.isAuthenticated()) {
      this.showNavBar = true;
    }
  }

}
