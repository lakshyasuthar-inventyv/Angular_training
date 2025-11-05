import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { AdminComponent } from './components/admin/admin';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: ':id', component: Dashboard }
];
