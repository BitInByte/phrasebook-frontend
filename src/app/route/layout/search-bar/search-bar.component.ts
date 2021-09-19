import { Component, OnInit } from '@angular/core';

import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public readonly faSearch = faSearch;
  public readonly faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
