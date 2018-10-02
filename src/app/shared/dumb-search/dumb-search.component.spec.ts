import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbSearchComponent } from './dumb-search.component';

describe('DumbSearchComponent', () => {
  let component: DumbSearchComponent;
  let fixture: ComponentFixture<DumbSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbSearchComponent ]
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
