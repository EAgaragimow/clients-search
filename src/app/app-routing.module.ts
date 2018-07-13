import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchClientPageComponent} from './search-client-page/search-client-page.component';

const routes: Routes = [
  {path: '', component: SearchClientPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
