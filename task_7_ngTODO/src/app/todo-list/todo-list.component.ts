import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
    todos = [];
 
    constructor( private todoService: TodoService) {}

    ngOnInit() {
        this.todoService.getTodos().then(todos => this.todos = todos);
    }

    delete(todo) {
        this.todoService.deleteTodo(todo)
    }

    toggle(todo) {
        this.todoService.toggleTodo(todo)
    }

}