import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  localTodos!: string | null;
  todos: Todo[];

  constructor() {
    this.localTodos = localStorage.getItem('todos');
    if (this.localTodos === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localTodos);
    }
  }

  todoDelete(todo: Todo): void {
    const index: number = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoAdd(todo: Todo): void {
    todo.sno = this.todos.length + 1;
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoDone(todo: Todo): void {
    const index: number = this.todos.indexOf(todo);
    this.todos[index].active = !todo.active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
