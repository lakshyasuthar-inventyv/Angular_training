import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private http = inject(HttpClient);

  getUserDetails(id:string|null) {
    console.log('Injected user ID from route:', id);
    const currentUserId = id || environment.currentUserId;
    console.log('currentUserId', currentUserId);
    console.log('Fetching details for user ID:', currentUserId);
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${currentUserId}`
    );
  }
}
