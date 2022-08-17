import { Component } from '@angular/core';
import { PatientService } from '../core/services/patient-service';
import { Observable } from 'rxjs';
import { Patients } from '../patient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  patients$: Observable<any>;

  constructor(private readonly patientService: PatientService) {
    this.patients$ = patientService.get();
  }
}
