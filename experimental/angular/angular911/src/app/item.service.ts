import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { Item } from './item';
import { map, retryWhen, delayWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getAllItemsUrl = 'assets/json/items.json';
  constructor(
    private httpClient: HttpClient
  ) { }
  getAllItems(): Observable<{ items: Array<Item> }>{
    const returnObject = this.httpClient.get<{ items: Array<Item> }>(this.getAllItemsUrl);
    returnObject.pipe(
      map( val => {
        return val;
      }),
      retryWhen(
        delayWhen(
          val => timer(val * 1000)
        )
      )
    );
    return returnObject;
  }
  getItem(id: number): Observable<Item>{
    const returnObject = this.httpClient.get<Item>(this.getItemUrl(id));
    returnObject.pipe(
      map( val => {
        return val;
      }),
      retryWhen(
        delayWhen(
          val => timer(val * 1000)
        )
      )
    );
    return returnObject;
  }
  getItemUrl(id: number): string {
    return `assets/json/item/${id}.json`;
  }
}
