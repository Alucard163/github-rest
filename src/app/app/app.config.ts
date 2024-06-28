import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from "@angular/common/http";
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { githubApiFeatureKey } from '@github-rest/github-api';
import { githubApiFeature } from '@github-rest/github-api';
import { githubApiEffects } from '@github-rest/github-api';
import { environment } from '../../environments/environment';
import { API_URL } from '@github-rest/http';
import { PER_PAGE } from '@github-rest/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
    {
      provide: PER_PAGE,
      useValue: environment.per_page,
    },
    provideStore({
      [githubApiFeatureKey]: githubApiFeature.reducer
    }),
    provideEffects(githubApiEffects),
    provideAnimations(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
