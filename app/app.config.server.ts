//src/app/app.config.server.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const config: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    { provide: 'API_BASE_URL', useValue: 'http://localhost:30000' }
  ]
};
