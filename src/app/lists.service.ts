import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  users: any = [
    {id: 1, fullname: 'Anessova Nazym', groupID: '5'},
    {id: 2, fullname: 'Kenesbekov Adil', groupID: '5'},
    {id: 3, fullname: 'Kereidin Alisher', groupID: '3'}
  ];

  groups: any = [
    {id: 5, groupName: 'IS1805K'},
    {id: 3, groupName: 'IS1803K'}
  ];
  constructor() { }

  public getUsers() {
    return this.users;
  }
  public  getGroups() {
    return this.groups;
  }
}
