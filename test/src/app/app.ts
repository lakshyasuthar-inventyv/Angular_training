import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserBiography } from './components/user-profile/user-biography/user-biography';
import { ProfilePhoto } from './components/user-profile/profile-photo/profile-photo';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserBiography, ProfilePhoto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected bio = signal('No biography set');


  updateBio(newBio: string) {
    this.bio.set(newBio);
  }
}
