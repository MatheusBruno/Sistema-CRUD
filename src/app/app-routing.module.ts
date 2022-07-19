import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoveryAccountComponent } from './recovery-account/recovery-account.component';
import { HomesystemComponent } from './system/homesystem/homesystem.component';
import { PageditComponent } from './system/pagedit/pagedit.component';
import { WindowRegisterComponent } from './system/window-register/window-register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recoveryaccount', component: RecoveryAccountComponent },
  {path: 'system/homesystem', component: HomesystemComponent},
  {path: 'system/windowregister', component: WindowRegisterComponent},
  {path: 'system/pagedit/:id', component: PageditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
