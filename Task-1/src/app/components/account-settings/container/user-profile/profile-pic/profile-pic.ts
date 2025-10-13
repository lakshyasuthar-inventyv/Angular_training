import { Component, signal, WritableSignal } from '@angular/core';
import { CommonService } from '../../../../../services/common-service';
import { User } from '../../../../../interfaces/user-interface';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile-pic',
  imports: [ FormsModule],
  templateUrl: './profile-pic.html',
  styleUrl: './profile-pic.css'
})


export class ProfilePic {
  userData:User;
  inputLengthValue: WritableSignal<number> = signal(0);
  newProfilePicUrl:string = "";
  constructor(public commonService: CommonService) {
    this.userData = this.commonService.getUser();
  }

  updatePic(){
    const newUser: User = {
        name: "Lakshya",
        address: "123 Main St",
        photoUrl: this.newProfilePicUrl,
        bio: "Hello, I'm Lakshya!",
        custom_message: "Welcome to my profile!",
        plan: this.commonService.user().plan
    }

    this.commonService.updateUser(newUser);
  }


}
