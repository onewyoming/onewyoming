import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable, of, range } from 'rxjs';
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit, OnChanges {
  title = 'Wyoming';
  myCounter: number;
  constructor() { }
  ngOnInit() {
    this.myCounter = 0;
    this.getNumbers().subscribe({
      next: x => this.myCounter = x,
      error: x => this.myCounter = 0,
      complete: () => this.myCounter = 1
    })
  }
  ngOnChanges() {
  }
  getNumbers(): Observable<number> {
    return Observable.create(function (observer: { next: (arg0: number) => void; complete: () => void; }) {
      for (let i = 0; i < 999999; i++) {
        setTimeout(() => {
          observer.next(i);
        }, 1);
      }
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });
  }
}
