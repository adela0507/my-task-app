import { Component, Input } from '@angular/core';
import { Task } from "../task/task";

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})


export class Tasks {

  @Input ({required:true}) name!:string;
  tasks=[{
    id:'t1'
  }]
}
