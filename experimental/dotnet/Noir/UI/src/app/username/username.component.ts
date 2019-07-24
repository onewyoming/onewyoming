import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.sass']
})
export class UsernameComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("init");
    console.log(this.user);
  }

  getUser() {
    this.userService.getUser()
      .subscribe((data: User) => this.user = { 
        id: data['id'],
        siteId: data['siteId'],
        xxhrId: data['xxhrId'],
        userId: data['userId'],
        email: data['email'],
        username: data['username'],
        displayName: data['displayname'],
        roles: data['roles']
      })
  }
}
