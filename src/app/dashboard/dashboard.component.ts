import { Component } from '@angular/core';
import { PatientService } from '../core/services/patient-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  patients$: Observable<any>;

  constructor(private readonly patientService: PatientService,
              private router: Router) {
  // retrieve data from get() function from patient service and write to patients$
  this.patients$ = patientService.get();
  }
  // function to navigate to details page of specific id
  onSelect(patient: any) {
      this.router.navigate(['/details', patient.id]);
    }
  }

