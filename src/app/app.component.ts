import { Component } from '@angular/core';
import Icons from "../assets/icons";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Category } from "./enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icons = Icons

  category: number = Category.NENHUMA;  

  constructor(private location: Location, private router: Router) { }

  backClicked() {
    this.location.back();
  }

  isNotDashboard() {
    return this.router.url !== "/dashboard" && this.router.url !== "/";
  }

  isNotRegister() {
    return this.router.url !== "/register";
  }

  goHome(){
    this.router.navigate(["/"])
  }
}
