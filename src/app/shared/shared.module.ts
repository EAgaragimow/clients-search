import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsService} from './services/clients.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ClientsService]
})
export class SharedModule {}
