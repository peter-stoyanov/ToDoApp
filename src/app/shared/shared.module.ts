import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from './layout';
import { ErrorListComponent } from './error-list/error-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
  ]
})
export class SharedModule { }
