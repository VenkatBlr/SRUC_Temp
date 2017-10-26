import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { SignupRoutes } from './signup/signup.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { DashboardComponent } from './dashboard/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './dashboard/home';
import {AlbumLoaderRoutes} from './albumloader/albumloader.routes';

export const routes: Routes = [
  ...LoginRoutes,
  // ...SignupRoutes,
  ...DashboardRoutes,
  { path: '**', component: DashboardComponent },
//    {path:'',redirectTo:'/dashboard/home', pathMatch: 'full' }
];
