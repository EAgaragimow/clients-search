import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {ClientRoutingModule} from './search-client-page/client-routing.module';

import {AppComponent} from './app.component';
import {SearchInputComponent} from './search-client-page/search-input/search-input.component';
import {ClientsListComponent} from './search-client-page/clients-list/clients-list.component';
import {ClientInfoComponent} from './search-client-page/client-info/client-info.component';
import {SearchClientPageComponent} from './search-client-page/search-client-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    ClientsListComponent,
    ClientInfoComponent,
    SearchClientPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    ClientRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
