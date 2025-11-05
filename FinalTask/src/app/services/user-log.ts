import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserLog {
  log(userId: number): void {
    // Retrieve existing logs from localStorage
    const logsStr = localStorage.getItem('userLogs');
    const logs = logsStr ? JSON.parse(logsStr) : [];

    // Find if this user already has a log entry
    const existing = logs.find((entry: any) => entry.userId === userId);

    if (existing) {
      // Increment total time by 1 second
      existing.timeSpentOnPage = (existing.timeSpentOnPage || 0) + 1;
    } else {
      // Create new log entry
      logs.push({
        userId,
        timeSpentOnPage: 1,
      });
    }

    // Save updated logs back to localStorage
    localStorage.setItem('userLogs', JSON.stringify(logs));
  }
}
