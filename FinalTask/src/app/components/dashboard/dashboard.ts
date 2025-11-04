import { Location } from './location/location';
import { UserDetailsComponent } from './user-details/user-details';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [UserDetailsComponent,Location],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {


}
