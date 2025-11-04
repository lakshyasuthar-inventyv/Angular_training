import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserLocation {
  private http = inject(HttpClient);

   getUserLocation(id:string | null) {
    console.log('Injected user ID from route:', id);
    const userData = this.http.get(`https://jsonplaceholder.typicode.com/users/${id || environment.currentUserId}`);
    return userData?.pipe(
      map((user: any) => {return {username: user.username, lat: user.address.geo.lat, lng: user.address.geo.lng};})
    );
  }
}
