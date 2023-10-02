import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { OutgoingHttpRequestService } from '../services/outgoing-http-request.service';

@Injectable()
export class TrackHttpRequestService implements HttpInterceptor {

  constructor(private outgoingHttpRequestService:OutgoingHttpRequestService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    this.outgoingHttpRequestService.updateHttpRequestState(true,req.url);

    return next.handle(req).pipe(
      map((evt:HttpEvent<any>)=>{
        if(evt instanceof HttpResponse)
        {
          this.outgoingHttpRequestService.updateHttpRequestState(false,req.url);
        }
        return evt;
      }),
      catchError((err)=>{
        this.outgoingHttpRequestService.updateHttpRequestState(false,req.url);
        return of(err as HttpEvent<any>);
      })
    )
  }
}
