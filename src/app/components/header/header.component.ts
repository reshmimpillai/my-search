import { Component, OnInit } from '@angular/core';
import { SearchInputService } from 'src/app/services/search-input.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  searhText: string;
  showNextSearch = false;
  constructor(private searchInputService: SearchInputService) { }


  serachFromNavBar(searchText: HTMLInputElement) {
    this.searhText = searchText.value;
    if (this.searhText != null) {
      this.showNextSearch =  true;
      this.searchInputService.setSerachText(this.searhText);
      searchText.value = '';

    }
  }

}
