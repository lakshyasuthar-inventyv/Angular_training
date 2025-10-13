import { Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { OnpushCd } from './components/onpush-cd/onpush-cd';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DefaultCd } from './components/default-cd/default-cd';
import { SignalsCd } from './components/signals-cd/signals-cd';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatTabsModule, OnpushCd, DefaultCd, SignalsCd],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private dataService: DataService) {}
  protected readonly title = signal('rendering');

  setTab(index: number) {
    if (index !== 0) {
      this.dataService.resetCount();
    }
  }
}
