import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientInfoComponent} from './client-info/client-info.component';

const routes: Routes = [
  {path: 'client/:id', component: ClientInfoComponent}
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
