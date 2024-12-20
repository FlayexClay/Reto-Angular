import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LOCALE_ID } from '@angular/core';
import localeEsPe from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';

// Registra el locale de es-PE
registerLocaleData(localeEsPe, 'es-PE');

export const appConfig: ApplicationConfig = {
  providers: [ { provide: LOCALE_ID, useValue: 'es-PE' }],
};
