import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest, map, of } from "rxjs";
import { Todo } from "../models/todos.model";
import { HttpClient } from "@angular/common/http";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
    providedIn: "root"
})
export class TodosService {
    private http = inject(HttpClient);
    todos: Observable<Todo[]> = this.http.get<Todo[]>(BASE_URL + 'todos');

    private delete$: BehaviorSubject<number> = new BehaviorSubject(0);
    private keyword$: BehaviorSubject<string> = new BehaviorSubject('');

    fileredTodos: Observable<Todo[]> = combineLatest([this.todos, this.keyword$]).pipe(
        map(([todos, keyword]) => {            
            if (keyword) {
                return todos.filter(todo => todo.title.includes(keyword));
            }
            return todos;
        })
    );

    delete(id: number) {
        this.delete$.next(id);
    }

    search(keyword: string) {
        this.keyword$.next(keyword);
    }
}