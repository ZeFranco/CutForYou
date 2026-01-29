import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ShopsComponent } from './shops/shops';
import { AboutComponent } from './about/about';
import { ContactsComponent } from './contacts/contacts';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: '', component: HomeComponent },              // Página inicial (vazio)
  { path: 'shops', component: ShopsComponent }, // localhost:4200/barbeiros
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent }
];
