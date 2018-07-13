import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../shared/services/clients.service';
import {Client} from '../../shared/models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService.getClients()
      .subscribe((clients: Client[]) => {
        this.clients = clients;
      });
  }

}
