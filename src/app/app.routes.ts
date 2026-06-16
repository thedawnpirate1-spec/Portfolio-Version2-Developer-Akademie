import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  // Startseite: das gesamte Portfolio (One-Pager).
  { path: '', component: Home },
  // Spaeter kommen hier Impressum/Datenschutz als eigene Routen dazu.
];
