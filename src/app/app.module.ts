import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { DescriptionTextareaComponent } from './components/description-textarea/description-textarea.component';
import { AbstractTextareaComponent } from './components/abstract-textarea/abstract-textarea.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { DatatimeInputComponent } from './components/datatime-input/datatime-input.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListComponent } from './pages/list/list.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { NewButtonComponent } from './components/new-button/new-button.component';
import { AlertTextComponent } from './components/alert-text/alert-text.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    NameInputComponent,
    DescriptionTextareaComponent,
    AbstractTextareaComponent,
    SaveButtonComponent,
    DatatimeInputComponent,
    CategorySelectComponent,
    RegisterComponent,
    ListComponent,
    ItemListComponent,
    NewButtonComponent,
    AlertTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
