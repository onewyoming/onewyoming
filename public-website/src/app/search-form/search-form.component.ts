import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit, AfterContentChecked {
  sdpSearchTextboxValue: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() { 
    console.log(this.sdpSearchTextboxValue);
  }

}
