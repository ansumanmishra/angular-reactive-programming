import { Route } from "@angular/router";
import { TodosComponent } from "./todos/todos.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found.component";
import { authenticate } from "./core/auth/auth.guard";

export const routes: Route[] = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
    path: 'todos',
    canActivate: [authenticate],
    component: TodosComponent
    // Lazy loading:
    // loadComponent: () => import('./todos/todos.component').then(m => m.TodosComponent)
},
{
    path: '**',
    component: PageNotFoundComponent
}
];