import { Route } from '@angular/router';
import {AlbumLoaderRoutes} from './albumloader/albumloader.routes';

import { FormComponent } from './index';

export const FormRoutes: Route[] = [
  {
    path: 'forms',
    component: FormComponent,


  }
];
