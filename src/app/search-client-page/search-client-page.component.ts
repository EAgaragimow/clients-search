import {Component, OnInit} from '@angular/core';
import {Client} from '../shared/models/client.model';
import {ClientsService} from '../shared/services/clients.service';

@Component({
  selector: 'app-search-client-page',
  templateUrl: './search-client-page.component.html',
  styleUrls: ['./search-client-page.component.scss']
})
export class SearchClientPageComponent implements OnInit {

  clients: Client[] = [];
  temporaryArr: Client[];

  constructor(private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.clientsService.getClients()
      .subscribe((clients: Client[]) => {
        this.clients = clients;
      });
  }

  onAdd(str: string) {
    this.temporaryArr = [];

    if (str === '') {
      this.clientsService.getClients()
        .subscribe((clients: Client[]) => {
          this.clients = clients;
        });
    }

    this.clients.forEach((item) => {
      for (let itemKey in item) {
        for (let iter in item[itemKey]) {
          if (item[itemKey][iter].toLowerCase().match(str.toLowerCase())) {
            if (item === this.temporaryArr[this.temporaryArr.length - 1]) {
              continue;
            }
            this.temporaryArr.push(item);
          }
        }
      }
    });

    return this.clients = this.temporaryArr;
  }


}
