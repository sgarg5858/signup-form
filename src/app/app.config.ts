import {
    provideRouter,
  } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import {appRoutes} from './app.routes';
import { ApplicationConfig } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(appRoutes), 
      provideAnimations(),
      provideHttpClient(),
      importProvidersFrom(MatSnackBarModule)
    ],
  };