import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest, map, of } from "rxjs";
import { Todo } from "../models/todos.model";

@Injectable({
    providedIn: "root"
})
export class TodosService {
    todos: Observable<Todo[]> = of([
        { id: 1, title: 'Learn Angular', completed: true },
        { id: 2, title: 'Learn React', completed: false },
        { id: 3, title: 'Learn Vue', completed: false }
    ]);

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