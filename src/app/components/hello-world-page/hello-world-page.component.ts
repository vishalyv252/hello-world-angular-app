import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world-page',
  imports: [],
  templateUrl: './hello-world-page.component.html',
  styleUrl: './hello-world-page.component.css'
})
export class HelloWorldPageComponent {

  // This is the title of the page using interpolation from one way data binding concepts.
  title : string = "Hello World!";

}
