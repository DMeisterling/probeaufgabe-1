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

  constructor(
    private readonly patientService: PatientService,
    private router: Router
  ) {
    // retrieve data from get() function from patient service and write to patients$
    this.patients$ = patientService.get();
  }
  // function to navigate to details page of specific id
  onSelect(patient: any) {
    this.router.navigate(['/details', patient.id]);
  }

  //function to check if patient has deceased boolean or deceasedDateTime set
  // if yes return 'deceased' css class, if no return 'patientList' css class
  checkDeceased(record: any): "deceased" | "patientList" {
    if (
      record.resource.deceasedBoolean !== undefined &&
      record.resource.deceasedBoolean == true
    ) {
      return 'deceased';
    } else if (
      record.resource.deceasedDateTime !== undefined
      ) {
      return 'deceased';
    } else {
      return 'patientList';
    }
  }
}

