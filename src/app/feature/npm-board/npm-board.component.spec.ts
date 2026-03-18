import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';

import { NpmBoardComponent } from './npm-board.component';
import { SharingService } from '../../core/data.service';

describe('NpmBoardComponent', () => {
  let component: NpmBoardComponent;
  let fixture: ComponentFixture<NpmBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmBoardComponent ],
      providers: [
        { provide: SharingService, useValue: { getData: jasmine.createSpy('getData').and.returnValue(of({})) } },
        { provide: MatSnackBar, useValue: { open: jasmine.createSpy('open') } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
