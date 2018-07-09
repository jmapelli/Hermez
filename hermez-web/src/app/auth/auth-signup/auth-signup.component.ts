import {Component, OnInit} from '@angular/core';
import {User} from '../../user/user-model/user';
import {Router} from '@angular/router';
import {UserService} from '../../user/user-service/user.service';
import {AuthService} from '../auth-service/auth.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  request: User = new User();
  error: Boolean = false;

  constructor(private router: Router,
              private userService: UserService,
              private authService: AuthService) {
  }

  public signUp() {
    this.error = false;
    this.userService
      .signUp(this.request)
      .subscribe(data => {
        this.signUpSuccess(data);
      }, err => {
        this.signUpFailed();
      });
  }

  public signIn() {
    this.router.navigate(['/signin']);
  }

  private signUpSuccess(user: User) {
    this.authService
      .signIn({
        email: user.email,
        password: this.request.password
      })
      .subscribe(data => {
        this.request = new User();
        sessionStorage.setItem('authorization', data.authorization);
        this.router.navigate(['/']);
      });
  }

  private signUpFailed() {
    this.error = true;
  }

  ngOnInit() {
  }

}
