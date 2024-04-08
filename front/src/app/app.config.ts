import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {BASE_PATH} from "./generated";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    {provide: BASE_PATH, useValue: 'http://localhost:8080'}]
};
