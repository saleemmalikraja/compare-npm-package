import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { NpmTabComponent } from './npm-tab.component';
import { SharingService } from '../../core/data.service';

describe('NpmTabComponent', () => {
  let component: NpmTabComponent;
  let fixture: ComponentFixture<NpmTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmTabComponent ],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        { provide: SharingService, useValue: { getData: jasmine.createSpy('getData').and.returnValue(of({})), setData: jasmine.createSpy('setData') } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
