import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, LayoutComponent]
})
export class AppComponent {
  title = 'angular-reactive-programming';
}
