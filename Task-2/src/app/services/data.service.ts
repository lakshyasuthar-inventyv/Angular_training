import { Observable, interval, map } from 'rxjs';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  private count = 0;
  dataSignal = signal<number>(0);

  // Observable Stream
  getObservableStream(): Observable<number> {
    return interval(1000).pipe(map(() => ++this.count));
  }

  // Promise
  getPromise(): Promise<number> {
    return new Promise(resolve => {
      setTimeout(() => resolve(++this.count), 2000);
    });
  }

  // Signal Update (Zoneless)
  startSignalUpdates() {
    setInterval(() => {
      this.dataSignal.update(v => v + 1);
    }, 1000);
  }

  resetCount() {
    this.count = 0;
    this.dataSignal.set(0);
  }
}
