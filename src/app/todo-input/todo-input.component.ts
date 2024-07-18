import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  @Output() addTodo = new EventEmitter<string>();
  newTodo: string = '';

  onAddTodo(): void {
    this.addTodo.emit(this.newTodo);
    this.newTodo = '';
  }
}
