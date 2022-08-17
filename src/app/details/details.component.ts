import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientService } from '../core/services/patient-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  public patientId: string = '';
  patientDetails$: Observable<any>;

  constructor(
    private readonly patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //grab id from url params and give it to getById function of patient service
    //write return to patientDetails$
    let id = this.route.snapshot.paramMap.get('id');
    this.patientId = id !== null ? id : '';
    this.patientDetails$ = this.patientService.getById(this.patientId);
  }

  //function to check relation code and return type of relation according to
  //https://terminology.hl7.org/3.1.0/CodeSystem-v2-0131.html
  checkRelation(data: any) {
    switch (data.coding[0].code) {
      case 'BP':
        return 'Billing contact person';
        break;
      case 'CP':
        return 'Contact Person';
        break;
      case 'EP':
        return 'Emergency contact person';
        break;
      case 'PR':
        return 'Person preparing referral';
        break;
      case 'E':
        return 'Employer';
        break;
      case 'C':
        return 'Emergency contact';
        break;
      case 'F':
        return 'Federal Agency';
        break;
      case 'I':
        return 'Insurance Company';
        break;
      case 'N':
        return 'Next-of-Kin';
        break;
      case 'S':
        return 'State Agency';
        break;
      case 'O':
        return 'Other';
        break;
      case 'U':
        return 'Unknown';
        break;
      default:
        return 'Unknown';
        break;
    }
  }

  //function to check gender code and return type of gender according to
  //https://terminology.hl7.org/3.1.0/CodeSystem-v2-0001.html
  checkGender(data: any) {
    switch (data.extension[0].valueCodeableConcept.coding[0].code) {
      case 'F':
        return 'Female';
        break;
      case 'M':
        return 'Male';
        break;
      case 'O':
        return 'Other';
        break;
      case 'U':
        return 'Unknown';
        break;
      case 'A':
        return 'Ambiguous';
        break;
      case 'N':
        return 'Not applicable';
        break;
      case 'X':
        return 'Non-Binary';
        break;
      default:
        return 'Other';
        break;
    }
  }
}
