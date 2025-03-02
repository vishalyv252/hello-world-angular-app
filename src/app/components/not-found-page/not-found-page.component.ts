import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  imports: [], // No additional module imports specified.
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {

  // Status code representing the HTTP response for a "Not Found" page, displayed via interpolation.
  status_code : number = 404;

  // Message shown to the user when the page is not found, displayed via interpoliation.
  status_message : string = "Page Not Found";

}
