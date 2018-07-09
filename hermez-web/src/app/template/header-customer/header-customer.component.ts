import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-customer',
  templateUrl: './header-customer.component.html',
  styleUrls: ['./header-customer.component.css']
})
export class HeaderCustomerComponent implements OnInit {

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
