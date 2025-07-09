import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './components/services/services';
import { ComingSoon } from './components/coming-soon/coming-soon';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'services', component: Services },
  // { path: '', component: ComingSoon },
];
