import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../shared/models/client.model';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  @Input() client: Client;

  constructor() {
  }

  ngOnInit() {
  }

}
