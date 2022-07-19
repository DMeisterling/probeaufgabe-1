import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PatientService {
  private static readonly url = 'https://wildfhir4.aegis.net/fhir4-0-1/Patient';
  private static readonly defaultMimeType = '_format=application/fhir+json';


  get(count: number = 50): Observable<string> {
    const url = `${PatientService.url}?${PatientService.defaultMimeType}&_count=${count}&name=`;
    return of('TODO: load patients...');
  }

  getById(id: string): Observable<string> {
    const url = `${PatientService.url}/${id}?${PatientService.defaultMimeType}`;
    return of('get patient by id...');
  }
}
