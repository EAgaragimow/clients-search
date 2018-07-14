import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchInput: string = '';
  @Output() addText = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onKeyUpSearch(event) {
    if (event.keyCode === 8) {
      this.addText.emit('240796' + this.searchInput);
    }
    this.addText.emit(this.searchInput);
  }

}
