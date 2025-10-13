import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { Component, computed, effect, runInInjectionContext, inject, signal, Injector } from '@angular/core';

@Component({
  selector: 'app-signals-cd',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './signals-cd.html',
  styleUrl: './signals-cd.scss'
})
export class SignalsCd {
  counter = signal(0);

  constructor(private dataService: DataService, private injector: Injector) {
    // ✅ Proper Angular v20 way
    runInInjectionContext(this.injector, () => {
      effect(() => {
        console.log('Counter changed:', this.counter());
      });
    });
  }

  increment() {
    this.counter.update(c => c + 1);
  }
}
