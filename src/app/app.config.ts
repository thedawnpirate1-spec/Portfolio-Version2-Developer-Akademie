import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // scrollPositionRestoration: bei Seitenwechsel nach oben scrollen;
    // anchorScrolling: #fragment-Links (z. B. #about) funktionieren weiter.
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
    ),
    // stellt den HttpClient app-weit bereit (fuer das Kontaktformular -> PHP)
    provideHttpClient(),
  ],
};
