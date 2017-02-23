import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
//import { BillComponent } from './bill';
import { PartnerComponent, PartnerTypesComponent, PartnerListComponent } from './partner';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
//  { path: 'bill',  component: BillComponent },
  { path: 'partner',  component: PartnerComponent },
  { path: 'partner-types',  component: PartnerTypesComponent },
  { path: 'partner-list',  component: PartnerListComponent },
];
