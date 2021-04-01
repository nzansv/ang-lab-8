import { Component, OnInit } from '@angular/core';
import {ListsService} from '../../lists.service';
import {GroupService} from '../../group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: any = [];

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): any{
    this.groupService.getGroups().subscribe(result => {
      this.groups = result;
      console.log(this.groups);
    });
  }

}
