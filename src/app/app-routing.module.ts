import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

import { OktaCallbackComponent, OktaAuthGuard, OktaAuthModule } from '@okta/okta-angular';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'mylist', component: UserListComponent, canActivate: [OktaAuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth({
          issuer: 'https://agr-dev-294434.okta.com/oauth2/default',
          redirectUri: 'http://localhost:4200/implicit/callback',
          clientId: '0oar4f755oih4tGaM356'
        })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
