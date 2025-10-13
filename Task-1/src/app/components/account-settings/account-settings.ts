import { Component, Input } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-account-settings',
  imports: [Navbar,RouterOutlet],
  templateUrl: './account-settings.html',
  styleUrl: './account-settings.css'
})
export class AccountSettings {
  @Input() isLoggedIn = true;
  ngOnInit() {
    alert('Account Settings Component Initialized:ngOnInit' );
  }

  handleLogout(state: boolean) {
  this.isLoggedIn = state;
  console.log('Parent received logout event:', state);
}
 handleLogin(state: boolean) {
  this.isLoggedIn = state;
  console.log('Parent received login event:', state);
}

}
