import { Injectable } from "@angular/core";
import { NewTaskData } from "../task/task.model";


@Injectable({  providedIn:'root'})
export class TaskService{
   private tasks=[{
    id:'t1',
    userId:'u1',
    title:'Task 1',
    description:'Description of Task 1',
    dueDate:'2025-12-31',
  },]

  constructor(){
    const task=localStorage.getItem('tasks');
    if(task){
      this.tasks=JSON.parse(task);
    }
  }

  getUserTasks(userId:string){
    return this.tasks.filter(task=>task.userId===userId);
  }
  addTask(taskData:NewTaskData,userId:string){
    this.tasks.unshift({
      id:'t' + (this.tasks.length + 1),
      userId:userId,
        title:taskData.title,   
    description:taskData.summary,
    dueDate:taskData.dueDate,
    });
    this.saveTasks();
  } 

  removeTask(id:string){
    this.tasks=this.tasks.filter(task=>task.id!==id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}