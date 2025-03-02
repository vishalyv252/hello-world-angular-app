import { Routes } from '@angular/router';
import { HelloWorldPageComponent } from './components/hello-world-page/hello-world-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: HelloWorldPageComponent }, // Default route that loads the HelloWorldPageComponent.
  { path: '**', component: NotFoundPageComponent } // Wildcard route for handling 404 errors (redirects unknown URLs).
];
