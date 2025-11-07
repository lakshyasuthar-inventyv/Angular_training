import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private http = inject(HttpClient);

  adminDashboardData() {
    const localStorageData = localStorage.getItem('userLogs');
    const timeSpentData: any[] = [];

    if (localStorageData) {
      const logs = JSON.parse(localStorageData);
      for (const entry of logs) {
        if (entry.userId && entry.timeSpentOnPage !== undefined) {
          timeSpentData.push({
            userId: entry.userId,
            timeSpentOnPage: entry.timeSpentOnPage,
          });
        }
      }
    }


    return this.http
      .get<any[]>('http://localhost:3000/users')
      .pipe(
        map((data) =>
          data.map((item) => {
            const timeData = timeSpentData.find((ts) => ts.userId === item.id);
            return {
              ...item,
              timeSpentOnPage: timeData ? timeData.timeSpentOnPage : 0,
            };
          })
        )
      );
  }

  createUser(id: number) {
    console.log('Creating user with ID:', id);
    const userData = this.http.post<any>(`http://localhost:3000/users`, { id });
    console.log('User data to create:', userData);
    return this.http
      .post<any>('http://localhost:3000/users', userData)
      .pipe(
        map((data) =>
          ({
            ...data,
          })
        )
      );
  }

  updateUser(id: number, userData: any) {
    return this.http
      .put<any>(`http://localhost:3000/users/${id}`, userData)
      .pipe(
        map((data) =>
          ({
            ...data,
          })
        )
      );
  }

  deleteUser(id: number) {
    return this.http.delete<void>(`http://localhost:3000/users/${id}`);
  }
}
