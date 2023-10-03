import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  exportAs:'banner'
})
export class BannerComponent {

  showInfo=true;
  toggle()
  {
    console.log("toggle");
    this.showInfo=!this.showInfo;
  }

}
