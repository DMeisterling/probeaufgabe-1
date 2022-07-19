import { NgModule } from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";

const modules = [
  MatToolbarModule,
  MatTabsModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
