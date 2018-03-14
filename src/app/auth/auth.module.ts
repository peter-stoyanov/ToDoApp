import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule, ErrorListComponent } from '../shared';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'test',
    redirectTo: '/'
    //canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
    //canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    authRouting,
    CommonModule,
    SharedModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ],

  providers: [
    AuthService, 
    AuthGuard
  ]
})
export class AuthModule {}