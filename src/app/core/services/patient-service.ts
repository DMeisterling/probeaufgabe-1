import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patients } from 'src/app/patient';

@Injectable()
export class PatientService {
  constructor(
    private http: HttpClient) {}
  private static readonly url = 'https://wildfhir4.aegis.net/fhir4-0-1/Patient';
  private static readonly defaultMimeType = '_format=application/fhir+json';

  get(count: number = 50): Observable<any[]> {
    const url = `${PatientService.url}?${PatientService.defaultMimeType}&_count=${count}&name=`;
    return this.http.get<any[]>(url)
    //.subscribe(val => console.log(val.entry));
    //return of('TODO: load patients...');
  }


  getById(id: string): Observable<string> {
    const url = `${PatientService.url}/${id}?${PatientService.defaultMimeType}`;
    return of(url);
    //return of('get patient by id...');
  }
}
