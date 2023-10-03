import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-banner-demo',
  standalone: true,
  imports: [CommonModule,BannerComponent],
  templateUrl: './banner-demo.component.html',
  styleUrls: ['./banner-demo.component.scss']
})
export class BannerDemoComponent {

}
