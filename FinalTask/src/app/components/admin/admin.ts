import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { AdminService } from '../../services/admin';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
})
export class AdminComponent implements OnInit {
  adminService = inject(AdminService);
  cdr = inject(ChangeDetectorRef);

  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'User ID', sortable: true, filter: true, width: 100 },
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    { field: 'timeSpentOnPage', headerName: 'Time Spent (s)', sortable: true, filter: true }
  ];

  rowData: any[] = [];

  ngOnInit() {
    this.adminService.adminDashboardData().subscribe({
      next: (data: any[]) => {
        this.rowData = data;
        this.cdr.detectChanges();
        console.log('Admin dashboard data loaded:', data);
      },
      error: (err: any) => {
        console.error('Error loading admin data:', err);
      }
    });
  }
}
