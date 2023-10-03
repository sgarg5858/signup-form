import { Directive, HostListener, Input } from '@angular/core';
import { CanToggle } from './can-toggle';

@Directive({
  selector: '[toggleTrigger]',
  standalone: true
})
export class ToggleTriggerDirective {

  @Input()
  toggleTrigger!:CanToggle;

  @HostListener('click')
  onClick()
  {
    this.toggleTrigger.toggle();
  }
}
