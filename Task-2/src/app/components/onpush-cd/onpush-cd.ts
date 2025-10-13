import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush-cd',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './onpush-cd.html',
  styleUrl: './onpush-cd.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushCd implements OnInit {
  counter = 0;

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.dataService.getPromise().then(val => {
      this.counter = val;
      this.cdr.detectChanges();
    });
  }
}
