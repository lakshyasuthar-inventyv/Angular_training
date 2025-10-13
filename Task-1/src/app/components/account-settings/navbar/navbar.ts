import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Output() loggedOut = new EventEmitter<boolean>();
  isLoggedIn:boolean = true;

  logout(){
    this.isLoggedIn = false;
    this.loggedOut.emit(this.isLoggedIn);
    alert('Logged out successfully!');
  }
}
