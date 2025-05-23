import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login.component',
  standalone: true,
  imports: [],
  templateUrl: './login.component.component.html',
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponentComponent { }
