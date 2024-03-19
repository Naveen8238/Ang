import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  constructor(private ts:TodoService){

  }
  todos=[]
  ngOnInit(): void {
   this.ts.todoList.subscribe (
    (data:any)=>{
      this.todos=data;
    },
    (error)=>{
      console.log('Something went Wrong!',error)
    }
   )
   this.ts.sendTodos()
  }
  getTodos(){

  }
}
