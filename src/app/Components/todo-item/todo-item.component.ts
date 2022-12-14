import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter();

  onDeleteTodo(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log(todo);
  }

  onCheckBoxClick(todo: Todo) {
    this.todoDone.emit(this.todo);
  }
}
