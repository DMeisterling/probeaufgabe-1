import { NgModule } from '@angular/core';
import { MaterialModule } from "../ui/material.module";
import { DashboardComponent } from "./dashboard.component";
import { CoreModule } from "../core/core-module";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    RouterModule
  ]
})
export class DashboardModule { }
