import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {
  ngOnDestroy() {
    console.log('Test Component Destroyed');
    alert('Test Component Destroyed');
  }
}
