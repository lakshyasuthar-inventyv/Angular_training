import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';
import { Component, ChangeDetectorRef, OnInit, inject } from '@angular/core';
import { Test } from '../test/test';

@Component({
  selector: 'app-default-cd',
  standalone: true,
  imports: [MatCardModule, Test],
  templateUrl: './default-cd.html',
  styleUrl: './default-cd.scss'
})
export class DefaultCd implements OnInit {

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  counter = 0;
  show = true;

  toggleShow() {
    this.show = !this.show;
  }
  ngOnInit() {
    this.dataService.getObservableStream().subscribe(val => {
      this.counter = val-1;
      this.cdr.detectChanges(); // Manual trigger in zoneless environment
    });
  }



}
