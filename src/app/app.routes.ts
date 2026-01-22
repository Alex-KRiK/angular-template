import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    title: 'Home',
    path: 'home',
    loadComponent: () => import('@features/home/home').then(({ Home }) => Home),
  },
  {
    title: 'About',
    path: 'about',
    loadComponent: () => import('@features/about/about').then(({ About }) => About),
  },
  { path: '**', redirectTo: 'home' },
];
