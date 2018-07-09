import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service/auth.service';
import {SigninRequest} from '../auth-model/signin-request';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.css']
})
export class AuthSigninComponent implements OnInit {

  request: SigninRequest = new SigninRequest();
  error: Boolean = false;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  public signIn() {
    this.error = false;

    this.authService
      .signIn(this.request)
      .subscribe(response => {
        this.signInSuccess(response);
      }, err => {
        this.signInFailed();
      });
  }

  public signUp() {
    this.router.navigate(['/signup']);
  }

  private signInSuccess(response: any) {
    sessionStorage.setItem('authorization', response.authorization);
    this.router.navigate(['/']);
  }

  private signInFailed() {
    this.error = true;
  }

  ngOnInit() {
  }

}
