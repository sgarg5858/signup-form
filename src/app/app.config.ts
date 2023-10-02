import {
    provideRouter,
  } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import {appRoutes} from './app.routes';
import { ApplicationConfig } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TrackHttpRequestService } from './interceptors/track-http-request.service';


export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(appRoutes), 
      provideAnimations(),
      provideHttpClient(withInterceptorsFromDi()),
      importProvidersFrom(MatSnackBarModule),
      {
        provide:HTTP_INTERCEPTORS,
        multi:true,
        useClass:TrackHttpRequestService
      }
     
    ],
  };