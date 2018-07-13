import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientInfoComponent } from './client-info/client-info.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    ClientsListComponent,
    ClientInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
