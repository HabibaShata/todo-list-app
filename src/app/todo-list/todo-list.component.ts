import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoInputComponent } from '../todo-input/todo-input.component';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, TodoItemComponent, TodoInputComponent],
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: string[] = [];

  ngOnInit(): void {
    this.loadTodos();
  }

  addTodo(todo: string): void {
    console.log(todo);
    
    if (todo.trim()) {
      this.todos.push(todo.trim());
      this.saveTodos();
    }
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  clearTodos(): void {
    if (confirm('Are you sure you want to clear all Tasks?')) {
      this.todos = [];
      localStorage.removeItem('todos');
    }
  }

  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodos(): void {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }
}
