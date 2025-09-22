import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-profile-photo',
  imports: [],
  templateUrl: './profile-photo.html',
  styleUrl: './profile-photo.css'
})
export class ProfilePhoto {
  protected title = signal('');
  constructor() {
  }
  changePhoto(url: string) {
    const photo = document.getElementById('profile-photo') as HTMLImageElement;
    photo.src = url;
  }

  updateTitle(newTitle: string) {
    this.title.set('Profile photo will be set to this url ' + newTitle);
  }
}
