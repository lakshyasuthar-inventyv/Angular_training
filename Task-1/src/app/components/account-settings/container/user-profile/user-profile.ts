import { Component } from '@angular/core';
import {ProfilePic} from "./profile-pic/profile-pic";
import { UserBio } from './user-bio/user-bio';
import { CommonService } from '../../../../services/common-service';
import { User } from '../../../../interfaces/user-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [ProfilePic, UserBio,FormsModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  userData: User;
  userBio: string | undefined;
  newBio: string = '';
  constructor(public commonService: CommonService) {
    this.userData = this.commonService.getUser();
    this.userBio = this.commonService.getUser().bio;
  }

  updateBio(newBio: string) {
    this.commonService.updateUser({ ...this.userData, bio: newBio });
  }

  ngOnDestroy() {
    alert('User Profile Component Destroyed:ngOnDestroy' );
    console.log('User Profile Component Destroyed:ngOnDestroy' );
  }

}
