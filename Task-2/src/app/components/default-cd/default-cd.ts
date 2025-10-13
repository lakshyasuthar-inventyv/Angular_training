import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { Component, ChangeDetectorRef, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-default-cd',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './default-cd.html',
  styleUrl: './default-cd.scss'
})
export class DefaultCd implements OnInit {
  counter = 0;

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.dataService.getObservableStream().subscribe(val => {
      this.counter = val-1;
      this.cdr.detectChanges(); // Manual trigger in zoneless environment
    });
  }



}
