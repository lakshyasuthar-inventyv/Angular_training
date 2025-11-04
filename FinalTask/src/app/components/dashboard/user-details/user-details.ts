import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../../../interfaces/user';
import { UserDetailsService } from '../../../services/user-details';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetailsComponent implements OnInit {
  private userService = inject(UserDetailsService);
  private id = inject(ActivatedRoute).snapshot.paramMap.get('id');
  user = signal<User | null>(null);

  ngOnInit(): void {
    this.userService.getUserDetails(this.id).subscribe((user) => {
      console.log(user);
      this.user.set(user);
    });
  }
}
