import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbCardComponent } from './dumb-card.component';

describe('DumbCardComponent', () => {
  let component: DumbCardComponent;
  let fixture: ComponentFixture<DumbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
