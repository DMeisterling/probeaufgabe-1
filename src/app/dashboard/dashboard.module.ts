import { NgModule } from '@angular/core';
import { MaterialModule } from "../ui/material.module";
import { DashboardComponent } from "./dashboard.component";
import { CoreModule } from "../core/core-module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule
  ]
})
export class DashboardModule { }
