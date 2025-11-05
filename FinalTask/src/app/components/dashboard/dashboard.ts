import { Loader } from '../loader/loader';
import { Location } from './location/location';
import { Log } from './log/log';
import { UserDetailsComponent } from './user-details/user-details';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [UserDetailsComponent,Location,Log],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {

}
