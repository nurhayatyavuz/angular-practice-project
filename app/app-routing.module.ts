import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'search/:searchTerm', component: Home },
  { path: 'tag/:tag', component: Home },
];
