import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{
    @Input() todos = [];
    @Output() delete = new EventEmitter();
    @Output() toggle =  new EventEmitter();

    onDelete(todo) {
        this.delete.emit(todo);
    }

    onToggle(todo) {
        this.toggle.emit(todo)
    }

}