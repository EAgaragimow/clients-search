import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {MatInputModule} from '@angular/material';

import {AppComponent} from './app.component';
import {SearchInputComponent} from './search-input/search-input.component';
import {ClientsListComponent} from './clients-list/clients-list.component';
import {ClientInfoComponent} from './client-info/client-info.component';
import {SearchClientPageComponent} from './search-client-page/search-client-page.component';

const routes: Routes = [
  {path: '', component: SearchClientPageComponent}
];

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
