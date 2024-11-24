import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FeedComponent } from './feed/feed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

export const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
];
