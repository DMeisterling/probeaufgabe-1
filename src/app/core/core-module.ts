import {NgModule} from "@angular/core";
import {PatientService} from "./services/patient-service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    PatientService
  ],
})
export class CoreModule { }
