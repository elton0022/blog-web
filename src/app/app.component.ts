import { Component } from '@angular/core';
import * as Icons from "../assets/icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icons = Icons
  title = 'blog-web';
}
