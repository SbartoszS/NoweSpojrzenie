import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {environment} from '../environments/environment'
import { filter } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }


  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {    

      let token = localStorage.getItem("token")? localStorage.getItem("token") : ""
      let refreshToken = environment.refresh_token;
   
      if (token) {
          req = this.addToken(req , token);
      }

      return next.handle(req).catch(err => {
        if (err.status === 401) {        
            if (err.error.code == "api_bearer_auth_not_logged_in" && !this.isRefreshing) {
              this.isRefreshing = true;
              this.refreshTokenSubject.next(null);

                //Genrate params for token refreshing        
              let params = {
                "token": refreshToken
              };
              return this.http.post('http://localhost/wordpress/wp-json/api-bearer-auth/v1/tokens/refresh', params).mergeMap(
                (data: any) => {                  
                  //If reload successful update tokens
                    if (data) {
                      this.isRefreshing = false;
                      this.refreshTokenSubject.next(data.access_token);
                      localStorage.setItem('token', data.access_token);
                    //Update tokens                       
                    //Clone our fieled request ant try to resend it
                    
                    req = this.addToken(req , data.access_token);

                    return next.handle(req);
                  }else {
                    //Logout from account
                  }
                }
              );
            } else {   

                return this.refreshTokenSubject.pipe(
                  filter(token => token != null),
                  take(1),
                  switchMap(jwt => {
                    return next.handle(this.addToken(req , jwt));
                  }));
            }
        }
        return throwError('error')
    });
  }

  errorHandler(error:HttpErrorResponse){
    
  }
}
