import { Component } from '@angular/core';
import { NavbarComponent } from "./core/pages/navbar/navbar.component";
import { HomeComponent } from "./features/pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-platform-ui';
}
