import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './components/dashboard/user-details/user-details';
import { Dashboard } from './components/dashboard/dashboard';
import { Loader } from './components/loader/loader';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
