import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  // Startseite: das gesamte Portfolio (One-Pager).
  { path: '', component: Home },

  // Rechtsseiten – lazy geladen (eigenes Bundle, erst bei Bedarf).
  {
    path: 'impressum',
    loadComponent: () => import('./pages/impressum/impressum').then((m) => m.Impressum),
  },
  {
    path: 'datenschutz',
    loadComponent: () => import('./pages/datenschutz/datenschutz').then((m) => m.Datenschutz),
  },

  // Unbekannte Pfade -> zurueck zur Startseite.
  { path: '**', redirectTo: '' },
];
