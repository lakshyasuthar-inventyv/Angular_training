import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { UserLog } from '../../../services/user-log';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.html',
  styleUrls: ['./log.css'],
})
export class Log implements OnInit, OnDestroy {
  private logService = inject(UserLog);
  private route = inject(ActivatedRoute);
  private userId = Number(this.route.snapshot.paramMap.get('id'));

  time = signal('0 seconds');
  private intervalId?: any;

  ngOnInit() {
    // Load existing time from localStorage
    const logsStr = localStorage.getItem('userLogs');
    const logs = logsStr ? JSON.parse(logsStr) : [];
    const existing = logs.find((log: any) => log.userId === this.userId);
    const currentSeconds = existing?.timeSpentOnPage || 0;
    this.time.set(`${currentSeconds} seconds`);

    // Update every second
    this.intervalId = setInterval(() => {
      this.logService.log(this.userId);

      // Update UI from localStorage each tick
      const updatedLogsStr = localStorage.getItem('userLogs');
      const updatedLogs = updatedLogsStr ? JSON.parse(updatedLogsStr) : [];
      const userLog = updatedLogs.find((log: any) => log.userId === this.userId);
      const seconds = userLog?.timeSpentOnPage || 0;
      this.time.set(`${seconds} seconds`);
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
