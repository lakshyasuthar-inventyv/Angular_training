import { Injectable, signal } from '@angular/core';
import {User} from "../interfaces/user-interface"
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private _user = signal<User>({
      name: "Lakshya",
      address: "123 Main St",
      photoUrl: "https://imgv3.fotor.com/images/homepage-feature-card/fotor-3d-avatar.jpg",
      bio: "Hello, I'm Lakshya!",
      custom_message: "Welcome to my profile!",
      plan: "Free"
  })


  user = this._user.asReadonly()

  getUser():User{
    return this.user()
  }

  updateUser(newUser: User){
    this._user.set(newUser);
  }

}
