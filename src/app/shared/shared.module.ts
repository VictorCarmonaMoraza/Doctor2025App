import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ReactiveFormsModule, FormsModule, HttpClientModule,
    LayoutComponent, DashboardComponent
  ]
})
export class SharedModule { }
