import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { RegisterComponent } from "./pages/register/register.component";
import { FullPageComponent } from "./pages/full-page/full-page.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "register", component: RegisterComponent },
  { path: "page/:id", component: FullPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
