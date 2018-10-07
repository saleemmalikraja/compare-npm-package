import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmTableComponent } from './npm-table.component';

describe('NpmTableComponent', () => {
  let component: NpmTableComponent;
  let fixture: ComponentFixture<NpmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmTableComponent ]
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
