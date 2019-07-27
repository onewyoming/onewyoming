import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Wyoming!';
  public constructor(private titleService: Title) {}
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit() {
    this.setTitle(this.title);
  }
}
