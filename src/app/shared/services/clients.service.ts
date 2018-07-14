import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/client.model';

@Injectable()
export class ClientsService {
  link = 'http://localhost:3000/clients';
  clients: Client[] = [];

  constructor(
    private http: HttpClient
  ) {
  }

  getClients() {
    return this.http.get(this.link);
  }
}
