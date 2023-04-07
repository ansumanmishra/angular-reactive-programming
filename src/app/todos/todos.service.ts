import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, Subject, combineLatest, map, shareReplay, switchMap, tap } from "rxjs";
import { Todo } from "../models/todos.model";
import { HttpClient } from "@angular/common/http";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
    providedIn: "root"
})
export class TodosService {
    private http = inject(HttpClient);
    private delete$: Subject<number> = new Subject();
    private keyword$: BehaviorSubject<string> = new BehaviorSubject('');
    private todosLists$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

    todos$: Observable<Todo[]> = this.http.get<Todo[]>(BASE_URL + 'todos').pipe(
        tap(todos => this.todosLists$.next(todos)),
        shareReplay(1)
    );

    deleteTodo$: Observable<number> = this.delete$.pipe(
        tap(id => console.log('delete id: ', id)),
        switchMap(id => this.http.delete<number>(BASE_URL + 'todos/' + id)),
        tap((id) => {
            const currentTodos = this.todosLists$.value.filter(todo => todo.id !== +id);            
            this.todosLists$.next(currentTodos);
        }),
    );
    
    filteredTodos$: Observable<Todo[]> = combineLatest([this.todosLists$, this.keyword$]).pipe(
        tap(([todos, keyword]) => console.log('todos: ', todos, 'keyword: ', keyword)),
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