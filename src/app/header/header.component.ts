import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  searhcText: string;
  showNextSearch = false;

  serachFromNavBar(searchText: HTMLInputElement) {
    this.searhcText = searchText.value;
    if (this.searhcText != null) {
      this.showNextSearch =  true;
      // alert(this.searhcText);
    }
  }

}
