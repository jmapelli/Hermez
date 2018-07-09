import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth-service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (AuthService.isAuthenticated()) {
      const request = req.clone({headers: req.headers.set('Authorization', AuthService.getAuthorizationHeader())});

      return next.handle(request);
    } else {
      return next.handle(req);
    }
  }
}
