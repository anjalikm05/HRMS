import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthHeaderComponent,
    AuthFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    AuthHeaderComponent,
    AuthFooterComponent
  ]
})
export class AuthComponentsModule { }
