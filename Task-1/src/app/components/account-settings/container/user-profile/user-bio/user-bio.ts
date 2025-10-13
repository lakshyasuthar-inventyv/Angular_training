import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  imports: [],
  templateUrl: './user-bio.html',
  styleUrl: './user-bio.css'
})
export class UserBio {
  @Input() userBio!: string;

  ngOnChanges(){
    alert("userBio changed to: " + this.userBio);
  }
}
