import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Client} from '../../shared/models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent {

  @Input() clients: Client[];
  @Output() clientSelect = new EventEmitter();

  select(client: Client, event) {
    this.clientSelect.emit(client);
    const childNodes = event.path[1].childNodes;

    childNodes.forEach((item) => {
      if (item.className === 'client ng-star-inserted active') {
        item.className = 'client ng-star-inserted';
      }
    });

    event.target.className += ' active';
  }

}
