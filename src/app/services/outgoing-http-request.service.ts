import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutgoingHttpRequestService {

  private anyhttpRequestInProgressBehaviorSubject= new BehaviorSubject<boolean>(false);
  public readonly  anyhttpRequestInProgress$ = this.anyhttpRequestInProgressBehaviorSubject.asObservable();

  private httpRequestsInProgressMap = new Map<string,boolean>();

  updateHttpRequestState(outgoing:boolean,url:string)
  {
    console.log(url);
    if (!url) {
      throw new Error('The request URL must be provided to the OutgoingHttpRequestService.updateHttpRequestState function');
    }
    if(outgoing)
    {
      this.httpRequestsInProgressMap.set(url,true);
      this.anyhttpRequestInProgressBehaviorSubject.next(true);
    }
    else if(outgoing === false && this.httpRequestsInProgressMap.has(url))
    {
      this.httpRequestsInProgressMap.delete(url)
    }
    if(this.httpRequestsInProgressMap.size === 0)
    {
      this.anyhttpRequestInProgressBehaviorSubject.next(false);
    }
  }

}
