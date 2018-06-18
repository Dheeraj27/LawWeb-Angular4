import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // pathMatch: 'full'
      },
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
        path: 'careers',
        component: CareersComponent,
      },
      {
        path: 'careers',
        component: CareersComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
  ];
  
  export const appRouterModule = RouterModule.forRoot(routes);
