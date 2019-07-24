import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:5000";
  getUser()
  {
    return this.http.get(this.baseUrl + "/api/values");
  }
}
