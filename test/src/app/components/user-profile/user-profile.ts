import { Component } from '@angular/core';
import { ProfilePhoto } from './profile-photo/profile-photo';
@Component({
  selector: 'app-user-profile',
  imports: [ProfilePhoto],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {

}
