import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { DatatimeInputComponent } from './components/datatime-input/datatime-input.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { RegisterComponent } from './pages/register/register.component';
import { AlertTextComponent } from './components/alert-text/alert-text.component';
import { BgButtonComponent } from './components/bg-button/bg-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    DatatimeInputComponent,
    CategorySelectComponent,
    RegisterComponent,
    AlertTextComponent,
    BgButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
