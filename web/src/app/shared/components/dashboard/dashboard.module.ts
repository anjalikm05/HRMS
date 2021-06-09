import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent
  ]
})
export class DashboardModule { }
