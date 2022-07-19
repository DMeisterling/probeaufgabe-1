import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {MaterialModule} from "../ui/material.module";
import {PatientService} from "../core/services/patient-service";
import {of} from "rxjs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ MaterialModule, BrowserAnimationsModule ],
      providers: [
        { provide: PatientService, useValue: { get:() => of('Todo: should be mocked')}},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
