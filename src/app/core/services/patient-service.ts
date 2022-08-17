import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PatientService {
  constructor(
    private http: HttpClient) {}
  private static readonly url = 'https://wildfhir4.aegis.net/fhir4-0-1/Patient';
  private static readonly defaultMimeType = '_format=application/fhir+json';

    //make GET request to api and receive 50 entries
  get(count: number = 50): Observable<any[]> {
    const url = `${PatientService.url}?${PatientService.defaultMimeType}&_count=${count}&name=`;
    return this.http.get<any[]>(url)
  }

    //make GET request with specific id to retrieve data from 1 entry
  getById(id: string): Observable<any[]> {
    const url = `${PatientService.url}/${id}?${PatientService.defaultMimeType}`;
    return this.http.get<any[]>(url)
  }
}
