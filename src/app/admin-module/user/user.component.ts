import { Component, OnInit } from '@angular/core';
import {ListsService} from '../../lists.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): any{
    this.userService.getUsers().subscribe(result => {
      this.users = result;
      console.log(this.users);
    });
  }

}
