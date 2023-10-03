import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutgoingHttpRequestService } from './services/outgoing-http-request.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BannerDemoComponent } from './components/banner-demo/banner-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[RouterOutlet,CommonModule,MatProgressBarModule,BannerDemoComponent]
})
export class AppComponent {
  title = 'test';
  constructor(public readonly outgoingHttpReqService:OutgoingHttpRequestService){}
}
