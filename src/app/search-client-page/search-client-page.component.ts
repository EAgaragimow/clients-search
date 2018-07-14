import {Component, OnInit} from '@angular/core';
import {Client} from '../shared/models/client.model';
import {ClientsService} from '../shared/services/clients.service';

@Component({
  selector: 'app-search-client-page',
  templateUrl: './search-client-page.component.html',
  styleUrls: ['./search-client-page.component.scss']
})
export class SearchClientPageComponent implements OnInit {

  client: Client;
  clients: Client[] = [];
  reserveClients: Client[] = [];
  temporaryArr: Client[];

  constructor(private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.clientsService.getClients()
      .subscribe((clients: Client[]) => {
        this.clients = clients;
        this.reserveClients = clients;
      });
  }

  search(str: string) {
    this.temporaryArr = [];

    if (str === '') {
      this.clients = this.reserveClients;
    } else if (str.match('backspace')) {
      const sliceStr = str.slice(9);

      this.clients = this.reserveClients;

      this.clients.forEach((item) => {
        for (const itemKey in item) {
          for (const val in item[itemKey]) {
            if (item[itemKey][val].toLowerCase().match(sliceStr.toLowerCase())) {
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

    this.clients.forEach((item) => {
      for (const itemKey in item) {
        for (const val in item[itemKey]) {
          if (item[itemKey][val].toLowerCase().match(str.toLowerCase())) {
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

  clientChoice(client: Client) {
    this.client = client;
  }

}
