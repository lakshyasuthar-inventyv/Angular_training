import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AdminService } from '../../../services/admin';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-user.html',
  styleUrls: ['./update-user.css'],
})
export class UpdateUser {
  private adminService = inject(AdminService);

  @Input() userId!: number;
  @Input() userName: string = '';
  @Input() userEmail: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() updated = new EventEmitter<any>();

  isSaving = false;

  saveUser() {
    if (!this.userId) {
      alert('User ID missing');
      return;
    }

    this.isSaving = true;

    this.adminService
      .updateUser(this.userId, { name: this.userName, email: this.userEmail })
      .subscribe({
        next: (res) => {
          alert(`User "${res.name}" updated successfully!`);
          this.updated.emit(res);
          this.close.emit();
          this.isSaving = false;
        },
        error: (err) => {
          console.error('Error updating user:', err);
          alert('Failed to update user.');
          this.isSaving = false;
        },
      });
  }

  cancel() {
    this.close.emit();
  }
}
