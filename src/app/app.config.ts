// Importing necessary Angular modules and utilities
import { ApplicationConfig } from '@angular/core';  // Import ApplicationConfig for application-level configuration
import { provideRouter } from '@angular/router';  // Import provideRouter to set up routing
import { routes } from './app.routes';  // Import routing configuration (routes) defined elsewhere in the app
import { provideClientHydration } from '@angular/platform-browser';  // Import provideClientHydration for client-side hydration (initial state of the app)
import { provideHttpClient, withFetch } from '@angular/common/http';  // Import provideHttpClient to set up HTTP client and withFetch to use the Fetch API
import { provideAnimations } from '@angular/platform-browser/animations';  // Import provideAnimations to enable animations support in the app

// Application configuration object that Angular will use during app initialization
export const appConfig: ApplicationConfig = {
  providers: [  // The providers array lists the services and configurations needed by the app
    provideRouter(routes),  // Set up routing using the routes defined in app.routes.ts
    provideAnimations(),  // Enable animations in the app
    provideHttpClient(withFetch()),  // Set up the HTTP client with the Fetch API as the backend (alternative to XMLHttpRequest)
    provideClientHydration()  // Enable client-side hydration to restore state on the client during app initialization
  ]
};

