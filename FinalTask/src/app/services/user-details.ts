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
    const currentUserId = id || environment.currentUserId;
    return this.http.get<User>(
      `http://localhost:3000/users/${currentUserId}`
    );
  }
}
