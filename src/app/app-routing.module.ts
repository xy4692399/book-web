import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryComponent} from './libraries/libraries.component';
import { RegistersComponent} from './registers/registers.component';
import {LoginsComponent} from './logins/logins.component';
import {SingleComponent} from './single/single.component';

const routes: Routes = [
  { path: '', redirectTo: '/library', pathMatch: 'full' },
  { path: 'library', component: LibraryComponent },
  { path: 'register', component: RegistersComponent },
  { path: 'login', component: LoginsComponent},
  { path: 'single', component: SingleComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
