import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { 
    this.sendTodos()
  }
  todos=[
    'task1',
    'task2',
    'task3'
  ]
  todoList=new Subject()
  sendTodos(){
    this.todoList.next(this.todos)
  }
  addNewTodo(t:any){
    this.todos.push(t)
    this.sendTodos()
  }
}
