import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { AdminService } from '../../services/admin';
import { UpdateUser } from './update-user/update-user'; // import update component
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AgGridModule, UpdateUser, NgIf], // add popup component
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
})
export class AdminComponent implements OnInit {
  adminService = inject(AdminService);
  cdr = inject(ChangeDetectorRef);

  showPopup = false; // to toggle popup
  selectedUser: any = null;

  rowData: any[] = [];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.adminService.adminDashboardData().subscribe({
      next: (data: any[]) => {
        this.rowData = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading admin data:', err),
    });
  }

  columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'User ID',
      sortable: true,
      filter: true,
      pinned: 'left',
      width: 100,
    },
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    {
      headerName: 'Actions',
      width: 100,
      pinned: 'right',
      cellRenderer: (params: ICellRendererParams) => {
        const container = document.createElement('span');
        // Edit button
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = '✏️';
        editBtn.title = 'Edit User';
        editBtn.style.marginRight = '8px';
        editBtn.addEventListener('click', () => {
          this.openEditPopup(params.data);
        });
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.title = 'Delete User';
        deleteBtn.addEventListener('click', () => {
         this.deleteUserRow(params.data.id);
        });
        container.appendChild(editBtn);
        container.appendChild(deleteBtn);
        return container;
      },
      sortable: false,
    },
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    {
      field: 'timeSpentOnPage',
      headerName: 'Time Spent (s)',
      sortable: true,
      filter: true,
    }
  ];

  openEditPopup(user: any) {
    this.selectedUser = user;
    this.showPopup = true;
    this.cdr.detectChanges();
  }

  // Close popup
  closePopup() {
    this.showPopup = false;
  }

  // After user updates → call service + reload table
  saveUpdatedUser(userData: any) {
    this.updateUser(this.selectedUser.id, userData);
    this.closePopup();
  }


  updateUser(id: number, userData: any) {
    this.adminService.updateUser(id, userData).subscribe({
      next: (res) => {
        console.log('User updated:', res);
        this.loadData();
      },
      error: (err) => console.error('Error updating user:', err),
    });
  }

  deleteUserRow(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.adminService.deleteUser(id).subscribe({
        next: () => {
          this.loadData();
        },
        error: (err) => console.error('Error deleting user:', err)
      });
    }
  }
}
