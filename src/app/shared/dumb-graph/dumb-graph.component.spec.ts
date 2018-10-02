import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbGraphComponent } from './dumb-graph.component';

describe('DumbGraphComponent', () => {
  let component: DumbGraphComponent;
  let fixture: ComponentFixture<DumbGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
