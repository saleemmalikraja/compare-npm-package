import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NpmTableComponent } from './npm-table.component';
import { SharingService } from '../../core/data.service';

describe('NpmTableComponent', () => {
  let component: NpmTableComponent;
  let fixture: ComponentFixture<NpmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmTableComponent ],
      providers: [
        { provide: SharingService, useValue: { getData: jasmine.createSpy('getData').and.returnValue(of({})) } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
