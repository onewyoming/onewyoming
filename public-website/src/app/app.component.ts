import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'wyoming';
  subTitle = 'the state of equality';
}

// document.body.innerHTML = greeter(user);
const a = function() {
  setInterval(function() {
    document.getElementById('apple').innerText = new Date().toString();
  }, 1000);
  };
a();
