import { NgModule } from '@angular/core';
import { MaterialModule } from "../ui/material.module";
import { DetailsComponent } from './details.component';
import { CoreModule } from "../core/core-module";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    RouterModule
  ]
})
export class DetailsModule { }
