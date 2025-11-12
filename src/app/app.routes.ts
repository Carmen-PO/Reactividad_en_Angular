import { Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1';
import { Componente2Component } from './componente2/componente2';

export const routes: Routes = [
  { path: '', component: Componente1Component },
  { path: 'componente2', component: Componente2Component }
];

