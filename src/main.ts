import { ENVIRONMENT_INITIALIZER, importProvidersFrom, inject } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app/routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InitService } from './app/init.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      HttpClientModule,
    ),
    // Running any initialization code before the application starts:
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(InitService).init()
    },
    // Provide token for the application to use:
    {
      provide: 'BASE_URL',
      useValue: 'http://localhost:3000/'
    }
  ]
})
  .catch(err => console.error(err));
