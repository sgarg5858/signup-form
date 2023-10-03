import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { ToggleTriggerDirective } from '../toggle-trigger.directive';

@Component({
  selector: 'app-banner-demo',
  standalone: true,
  imports: [CommonModule,BannerComponent,ToggleTriggerDirective],
  templateUrl: './banner-demo.component.html',
  styleUrls: ['./banner-demo.component.scss']
})
export class BannerDemoComponent {

}
