import { Component, signal } from '@angular/core';
import { AccountSettings } from './components/account-settings/account-settings';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [AccountSettings,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task-2');
}
