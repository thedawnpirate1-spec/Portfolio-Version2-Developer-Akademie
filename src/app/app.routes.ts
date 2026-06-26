import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [

  { path: '', component: Home },

  {
    path: 'impressum',
    loadComponent: () => import('./pages/impressum/impressum').then((m) => m.Impressum),
  },
  {
    path: 'datenschutz',
    loadComponent: () => import('./pages/datenschutz/datenschutz').then((m) => m.Datenschutz),
  },

  { path: '**', redirectTo: '' },
];
