import { Component, OnInit, Inject, AfterContentChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-client-detail',
  templateUrl: './fetch-client-detail.component.html',
  styleUrls: ['./fetch-client-detail.component.css']
})
export class FetchClientDetailComponent implements OnInit, AfterContentChecked {

  public clientDetails: ClientDetail[];
  public clientDetailUniqueStates;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ClientDetail[]>(baseUrl + 'clientdetail').subscribe(result => {
      this.clientDetails = result;
    }, error => console.error(error));
  }

  ngOnInit() {

  }

  ngAfterContentChecked() {
    if(this.clientDetails) {
      console.log([...new Set(this.clientDetails.map(clientDetail => clientDetail.State))]);
    }
    console.log(this);
    // console.log(this.clientDetailUniqueStates);
  }

}

interface ClientDetail {
  ID: number;
  UniqueIdentifier: string;
  Name: string;
  LegacyName: string;
  YearEstablished: string;
  StreetAddress: string;
  City: string;
  State: string;
  AccountManager: string;
  Email: string;
}
