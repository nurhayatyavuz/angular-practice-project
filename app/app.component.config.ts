//src/app/app.component.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    { provide: 'APP_TITLE', useValue: 'My Angular App' },
    { provide: 'APP_VERSION', useValue: '1.0.0' }
  ]
};
