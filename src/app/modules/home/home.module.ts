import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardGuessComponent } from './dashboard-guess/dashboard-guess.component';
import { BannerComponent } from './banner/banner.component';
import { routing } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DashboardStudentComponent, DashboardGuessComponent, BannerComponent]
})
export class HomeModule { }
