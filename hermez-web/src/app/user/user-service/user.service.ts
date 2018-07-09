import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user-model/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path = environment.api + '/api/users';

  constructor(private http: HttpClient) {
  }

  public signUp(data: User): Observable<User> {
    return this.http.post<User>(this.path + '/signup', data);
  }
}
