import { Component } from "@angular/core";

@Component({
    selector: "app-page-not-found",
    standalone: true,
    template: `
        <div class="page-not-found">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
    `,
    styles: [
        `
            .page-not-found {
                text-align: center;
                margin-top: 100px;
            }
        `
    ]
})
export class PageNotFoundComponent {
}