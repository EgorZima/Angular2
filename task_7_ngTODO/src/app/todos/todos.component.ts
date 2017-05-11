import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
    todos = [];
 
    constructor( private todoService: TodoService) {}

    ngOnInit() {
        this.todoService.getTodos().subscribe(todos => this.todos = todos);
    }

    create(title) {
        this.todoService.createTodo(title).subscribe(
            todo => this.todos.push(todo)
        )
    }

    delete(todo) {
        this.todoService.deleteTodo(todo).subscribe(
            res => {
                let index = this.todos.indexOf(todo);

                this.todos.splice(index, 1)
        })
    }

    toggle(todo) {
        this.todoService.toggleTodo(todo).subscribe(
            res => {
                todo.completed = !todo.completed;
            }
        )
    }

}