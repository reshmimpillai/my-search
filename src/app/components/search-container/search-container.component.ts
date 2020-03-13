import { Component, OnInit, Input } from '@angular/core';
import { SearchInputService } from '../../services/search-input.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  searchText: string;
  constructor(private searchInputService: SearchInputService) { }

  ngOnInit() {
    this.searchInputService.getSerachText().subscribe(searchValue => {
      this.searchText = searchValue;
    });

  }

}
