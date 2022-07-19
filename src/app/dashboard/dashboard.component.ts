import { Component } from '@angular/core';
import { PatientService } from "../core/services/patient-service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  patients$: Observable<string>;

  constructor(private readonly patientService: PatientService) {
    this.patients$ = patientService.get();
  }
}
