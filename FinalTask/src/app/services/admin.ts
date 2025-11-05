import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

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
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
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
}
