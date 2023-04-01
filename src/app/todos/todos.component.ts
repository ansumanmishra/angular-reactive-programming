import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { TodosService } from './todos.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatListModule, AsyncPipe, NgIf, NgFor, MatIconModule, HttpClientModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  readonly todosService = inject(TodosService);
  todos$ = this.todosService.fileredTodos;

  delete(id: number) {
    this.todosService.delete(id);
  }

  search(keyword: string) {
    this.todosService.search(keyword);
  }
}
