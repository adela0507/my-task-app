import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";


@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  get selectedUser(){
    return this.users.find((user)=>user.id===this.selectUserId)!;
  }

  selectUserId?:string;

  onSelectUser(id:string){
    this.selectUserId=id;
  }

  users=DUMMY_USERS;
}
