import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DumbSearchComponent } from './dumb-search.component';
import { AppService } from '../../core/app.service';

describe('DumbSearchComponent', () => {
  let component: DumbSearchComponent;
  let fixture: ComponentFixture<DumbSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbSearchComponent ],
      providers: [
        { provide: AppService, useValue: { apiRequest: jasmine.createSpy('apiRequest').and.returnValue(of({})) } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
