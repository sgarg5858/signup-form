import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports:[AsyncPipe,NgIf]
})
export class HomeComponent {

  constructor(public readonly authService:AuthService){}
}
