import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent, FooterComponent } from './layout';
import { ErrorListComponent } from './error-list/error-list.component';
import { ShowAuthedDirective } from './directives/show-authed.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ErrorListComponent,
    ShowAuthedDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorListComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule { }
