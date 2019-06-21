import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { OktaAuthModule } from '@okta/okta-angular';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OktaAuthModule.initAuth({
      issuer: 'https://agr-dev-294434.okta.com/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '0oar4f755oih4tGaM356'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
