import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NpmGraphComponent } from './npm-graph.component';
import { SharingService } from '../../core/data.service';

describe('NpmGraphComponent', () => {
  let component: NpmGraphComponent;
  let fixture: ComponentFixture<NpmGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmGraphComponent ],
      providers: [
        { provide: SharingService, useValue: { getData: jasmine.createSpy('getData').and.returnValue(of({})) } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
