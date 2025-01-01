import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'items',
    loadComponent: () => import('./pages/items').then((m) => m.ItemsComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'items',
  },
];
