import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchInput: string = '';
  @Output() search = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onKeyUpSearch() {
    this.search.emit(this.searchInput);
  }

}
