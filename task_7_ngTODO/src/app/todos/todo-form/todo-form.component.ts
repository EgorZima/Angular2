import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
     title = '';
     @Output() create = new EventEmitter();

     onSubmit() {
       this.create.emit(this.title)
     }

  

}