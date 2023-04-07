import { Route } from "@angular/router";
import { TodosComponent } from "./todos/todos.component";

export const routes: Route[] = [{
    path: 'todos',
    component: TodosComponent
    // Lazy loading:
    // loadComponent: () => import('./todos/todos.component').then(m => m.TodosComponent)
}];