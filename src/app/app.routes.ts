import { Routes } from '@angular/router';
import { Singleform } from './singleform/singleform';
import { Dashboard } from './dashboard/dashboard';
import { AdminLayoutComponent } from './layout/layout';
import { Register } from './register/register';
import { UsersComponent } from './user/user';
import { CustomerComponent } from './customer/customer';

import { GalleryComponent } from './gallery/gallery';
import { EmailInboxComponent } from './email-inbox/email-inbox';
import { FileUploadsComponent } from './file-uploads/file-uploads';
import { Userprofile } from './userprofile/userprofile';

export const routes: Routes = [
  { path: '', component: Singleform },

  { path: 'register', component: Register },
  {path:'customer',component:CustomerComponent},
  {path:'userprofile',component:Userprofile},
  {path:'gallery',component:GalleryComponent},
  {path:'email-inbox',component:EmailInboxComponent},
  {path:'file-uploads',component:FileUploadsComponent},

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: Dashboard }
    ]
  },
  { path: 'admin/users', component: UsersComponent }
];
