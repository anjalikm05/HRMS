import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { ViewEmployeesComponent } from 'src/app/modules/view-employees/view-employees.component';
import { DashboardModule } from 'src/app/shared/components/dashboard/dashboard.module';

import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ViewEmployeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
