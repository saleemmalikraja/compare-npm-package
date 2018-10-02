import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbTableComponent } from './dumb-table.component';

describe('DumbTableComponent', () => {
  let component: DumbTableComponent;
  let fixture: ComponentFixture<DumbTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
