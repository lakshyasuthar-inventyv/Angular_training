import { Component } from '@angular/core';
import { PaymentInfo } from './payment-info/payment-info';
import { UserProfile } from './user-profile/user-profile';
@Component({
  selector: 'app-container',
  imports: [PaymentInfo,UserProfile],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {

}
