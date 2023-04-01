import { Route } from "@angular/router";

export const routes: Route[] = [{
    path: 'todos',
    loadComponent: () => import('./todos/todos.component').then(m => m.TodosComponent)
}];