import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-client-detail',
  templateUrl: './fetch-client-detail.component.html',
  styleUrls: ['./fetch-client-detail.component.css']
})
export class FetchClientDetailComponent implements OnInit {

  public clientDetails: ClientDetail[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ClientDetail[]>(baseUrl + 'clientdetail').subscribe(result => {
      this.clientDetails = result;
    }, error => console.error(error));
  }

  ngOnInit() {
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
