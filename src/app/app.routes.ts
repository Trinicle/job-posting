import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { FindComponent } from './jobs/find/find.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
    children: [
      {
        path: 'find',
        component: FindComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
