import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // Imports RouterOutlet to enable routing in the root component.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
