import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { signal } from '@angular/core';

import { UserC } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required:true}) user!:UserC;
  
  @Input({required:true}) selected!:boolean;
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
