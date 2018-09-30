import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';


  
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(){}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


    var hostname = (new URL(req.url)).hostname;


 

    if (hostname != 'maps.googleapis.com') {

       let headers = req.headers
        .set('Content-Type', 'application/json')
        .set('x-access-token', `${localStorage.getItem('token')}`);

      var cloneReq = req.clone({ headers });


    } else {
      var cloneReq = req.clone({});

    }

    return next.handle(cloneReq);


  }
}
