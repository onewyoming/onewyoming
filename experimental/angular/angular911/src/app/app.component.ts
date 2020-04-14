import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular911';
  items: Array<Item>;
  constructor(private itemService: ItemService) {
    this.items = new Array<Item>();
  }
  ngOnInit() {
    this.itemService.getAllItems().subscribe({
      next: x => {
        this.items = this.items.concat(x);
        this.items.forEach(y => {
          console.log(y.title);
        });
      },
      error: x => {
        console.error({ x });
      },
      complete: () => {
        console.log('complete');
      }
    })
  }
}
