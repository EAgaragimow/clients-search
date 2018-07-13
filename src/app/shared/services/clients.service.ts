import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClientsService {
  link = 'http://localhost:3000/clients';

  constructor(
    private http: HttpClient
  ) {
  }

  getClients() {
    return this.http.get(this.link);
  }
}
