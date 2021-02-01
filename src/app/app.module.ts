import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersListComponent } from './components/users-list/users-list.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

import {  HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './service/filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    SearchInputComponent,

    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
