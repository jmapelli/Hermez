import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SigninRequest} from '../auth-model/signin-request';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = environment.api;

  constructor(private http: HttpClient) {
  }

  public static isAuthenticated() {
    return typeof sessionStorage.authorization !== 'undefined';
  }

  public static getAuthorizationHeader() {
    return sessionStorage.authorization;
  }

  public signIn(data: SigninRequest): Observable<any> {
    return this.http.post<any>(this.path + '/login', data);
  }

}
