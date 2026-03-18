import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NpmCardComponent } from './npm-card.component';
import { SharingService } from '../../core/data.service';

describe('NpmCardComponent', () => {
  let component: NpmCardComponent;
  let fixture: ComponentFixture<NpmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmCardComponent ],
      providers: [
        { provide: SharingService, useValue: { getData: jasmine.createSpy('getData').and.returnValue(of({})) } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
