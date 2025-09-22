import { Component, signal } from '@angular/core';
import { UserAddress } from '../userBiography/user-address/user-address';

@Component({
  selector: 'app-user-biography',
  imports: [UserAddress],
  templateUrl: './user-biography.html',
  styleUrl: './user-biography.css'
})
export class UserBiography {
  protected bio = signal('No bio set');
}
