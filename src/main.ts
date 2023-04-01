import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app/routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes), BrowserAnimationsModule)
  ]
})
  .catch(err => console.error(err));
