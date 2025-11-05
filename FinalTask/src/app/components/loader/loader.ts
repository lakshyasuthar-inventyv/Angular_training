import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Loading } from '../../services/loading';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader {
  loadingService = inject(Loading);
}
