import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { signal } from '@angular/core';

// type UserC = {
//     id:string;
//     avatar:string;
//     name:string;
//   };

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required:true}) user!:{
    id:string;
    avatar:string;
    name:string;
  };
  @Output() select=new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
  selectedUser=(DUMMY_USERS[this.randomIndex]);

  onSelectedUser(){
    this.select.emit(this.user.id);
  }

}
