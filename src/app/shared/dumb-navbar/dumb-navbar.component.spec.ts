import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbNavbarComponent } from './dumb-navbar.component';

describe('DumbNavbarComponent', () => {
  let component: DumbNavbarComponent;
  let fixture: ComponentFixture<DumbNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
