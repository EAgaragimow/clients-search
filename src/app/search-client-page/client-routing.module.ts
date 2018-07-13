import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchClientPageComponent} from './search-client-page.component';
import {ClientInfoComponent} from './client-info/client-info.component';

const routes: Routes = [
  {path: 'clients', component: SearchClientPageComponent, children: [
      {path: ':id', component: ClientInfoComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule {
}
