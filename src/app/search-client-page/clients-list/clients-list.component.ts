import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from '../../shared/models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  @Input() clients: Client[];

  @Output() clientSelect = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  select(client: Client) {
    this.clientSelect.emit(client);
  }

}
