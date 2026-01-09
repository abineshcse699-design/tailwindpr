import { Routes } from '@angular/router';
import { Singleform } from './singleform/singleform';
import { Dashboard } from './dashboard/dashboard';
import { AdminLayoutComponent } from './layout/layout';
import { Register } from './register/register';
import { UsersComponent } from './user/user';

export const routes: Routes = [
  { path: '', component: Singleform },

  { path: 'register', component: Register },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: Dashboard }
    ]
  },
  { path: 'admin/users', component: UsersComponent }
];
