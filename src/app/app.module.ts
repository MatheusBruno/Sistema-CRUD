import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { RecoveryAccountComponent } from './recovery-account/recovery-account.component';
import { HomesystemComponent } from './system/homesystem/homesystem.component';
import { WindowRegisterComponent } from './system/window-register/window-register.component';
import { PageditComponent } from './system/pagedit/pagedit.component';
import { AcessRegisterIndividualComponent } from './system/acess-register-individual/acess-register-individual.component';
import { Authlogin } from './authlogin/authlogin';
import { AuthDeactivate } from './authlogin/auth-deactivate';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    FormLoginComponent,
    FormRegisterComponent,
    RecoveryAccountComponent,
    HomesystemComponent,
    WindowRegisterComponent,
    PageditComponent,
    AcessRegisterIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [Authlogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
