import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'mylist', component: UserListComponent, canActivate: [OktaAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
